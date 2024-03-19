import { errorResponse, successResponse } from "@/lib/server/helper/responseBuilder";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

/**
 * POST - /api/image/upload
 * For uploading image
 */
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const file = formData.get("file");
    if (!file) {
      return errorResponse(null, "No files received.", 501);
    }

    if (!(file instanceof File)) {
      return errorResponse(null, "File is invalid", 400);
    }

    if (!file.type.startsWith("image/")) {
      return errorResponse(null, "File is not an image", 400);
    }

    if (file.size > 5 * 1024 * 1024) {
      return errorResponse(null, "File is too large. Maximum size is 5MB", 400);
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const filename = Date.now() + "_" + file.name.replaceAll(" ", "_");
    await writeFile(path.join(process.cwd(), "public/img/thumbnails/" + filename), buffer);

    return successResponse({ url: `/img/thumbnails/${filename}` }, "File uploaded successfully!", 201);
  } catch (e) {
    console.log(e);
    return errorResponse(null, (e as any).message, 501);
  }
}
