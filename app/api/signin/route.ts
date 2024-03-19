import { errorResponse, successResponse } from "@/lib/server/helper/responseBuilder";
import UserModel from "@/lib/server/model/UserModel";
import { NextRequest } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dbConnect from "@/lib/server/helper/connectDb";
import { jwtSign } from "@/lib/utils/jwtUtils";

const signInValidator = z.object({
  username: z.string().min(1, "User Name Cannot Be Empty").toLowerCase(),
  password: z.string().min(8, "Password need to be at least 8 character"),
});

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const _data = await signInValidator.safeParseAsync(body);
    if (!_data.success) {
      return errorResponse(_data.error.formErrors);
    }

    const found_user = await UserModel.findOne({
      username: _data.data.username,
    });
    if (!found_user) return errorResponse(null, "Invalid Password or Username");

    const isPasswordValid = await bcrypt.compare(_data.data.password, found_user.password || "");

    if (!isPasswordValid) return errorResponse(null, "Invalid Password or Username");

    console.log("Found User", found_user);

    const token = await jwtSign(
      {
        data: found_user.toObject(),
      }, // Singing Methdo
      "3d"
    );

    found_user.password = "";
    return successResponse({
      ...found_user.toObject(),
      tokenDuration: "3days",
      token,
    });
  } catch (e) {
    console.log(e);
    return errorResponse(null, "Internal Server Error", 500);
  }
}
