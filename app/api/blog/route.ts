import dbConnect from "@/lib/server/helper/connectDb";
import { errorResponse, successResponse } from "@/lib/server/helper/responseBuilder";
import BlogModel from "@/lib/server/model/BlogModel";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();

    const ceratedBlog = await new BlogModel(body).save();
    return successResponse(ceratedBlog.toObject(), "Blog Created Successfully", 200);
  } catch (e) {
    console.log(e);
    return errorResponse(null, "Internal Server error", 500);
  }
}
