import dbConnect from "@/lib/server/helper/connectDb";
import {
  errorResponse,
  successResponse,
} from "@/lib/server/helper/responseBuilder";
import UserModel from "@/lib/server/model/UserModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { addUserValidator } from "./validation";

export function GET(req: NextRequest) {
  console.log(req.cookies.toString());
  return new NextResponse("Hi I am working");
}

/**
 * POST - /api/user
 * For adding new User
 */
export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();

    const data = await addUserValidator.safeParseAsync(body);

    if (!data.success) {
      return errorResponse(data.error.formErrors);
    }

    const hashed_password = await bcrypt.hash(body.password, 10);

    const createdUser = await new UserModel({
      username: body.username,
      email: body.email,
      password: hashed_password,
      role: body.role,
    }).save();

    return successResponse(createdUser.toObject(), "User Created Successfully");
  } catch (e) {
    console.log(e);
    return errorResponse(null, (e as any).message, 501);
  }
}
