import { errorResponse, successResponse } from "@/lib/server/helper/responseBuilder";
import UserModel from "@/lib/server/model/UserModel";
import { NextRequest } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dbConnect from "@/lib/server/helper/connectDb";

const signInValidator = z.object({
  username: z.string().min(1, "User Name Cannot Be Empty").toLowerCase(),
  password: z.string().min(8, "Password need to be at least 8 character"),
});

async function jwtSign(payload: string | object | Buffer, secret: string, expiresIn: string) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secret, { expiresIn }, function (err, token) {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
}

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
      "219a2f62b007699ee20a10a878026bd2c4de5d51f1847ee154c3f4bcfc5c07d8520df768058172f7d4f1387074d076a63c68",
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
