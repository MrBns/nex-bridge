"use server";

import bcrypt from "bcrypt";
import { z } from "zod";
import UserModel from "../server/model/UserModel";
import dbConnect from "../server/helper/connectDb";
import { cookies } from "next/headers";
import { jwtSign } from "../utils/jwtUtils";

export type LoginResult = {
  success: boolean;
  error: boolean;
  message: string;
  data?: {
    token: string;
    user: object;
    tokenDuration: string;
  };
  errors?: any;
};

export async function handleLogin(formData: FormData): Promise<LoginResult> {
  await dbConnect();

  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const signInValidator = z.object({
    username: z.string().min(1, "User Name Cannot Be Empty").toLowerCase(),
    password: z.string().min(8, "Password need to be at least 8 character"),
  });

  const _data = signInValidator.safeParse({ username, password });
  if (!_data.success) {
    return {
      error: false,
      success: false,
      message: "Validation Failed",
      errors: _data.error.formErrors.fieldErrors,
    };
  }

  const found_user = await UserModel.findOne({
    username: _data.data.username,
  });

  if (!found_user)
    return {
      error: true,
      success: false,
      message: "Invalid Password or Username",
    };

  const isPasswordValid = await bcrypt.compare(_data.data.password, found_user.password || "");

  if (!isPasswordValid)
    return {
      error: true,
      success: false,
      message: "Invalid Password or Username",
    };

  console.log("Found User", found_user);

  const token = await jwtSign(
    {
      data: {
        _id: found_user._id,
        username: found_user.username,
        email: found_user.email,
        role: found_user.role,
      },
    }, // Singing Methdo
    "3d"
  );

  found_user.password = "";

  cookies().set("token", token as string, {
    maxAge: 60 * 60 * 24 * 3,
    expires: new Date(Date.now() + 60 * 60 * 24 * 3 * 1000),
    sameSite: true,
    httpOnly: process.env.NODE_ENV !== "development",
    secure: process.env.NODE_ENV !== "development",
  });

  return {
    error: false,
    success: true,
    message: "Login Successful",
    data: {
      user: {
        _id: found_user._id,
        username: found_user.username,
        email: found_user.email,
        role: found_user.role,
      },
      token: token as string,
      tokenDuration: "3days",
    },
  };
}
