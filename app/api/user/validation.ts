import UserModel from "@/lib/server/model/UserModel";
import { z } from "zod";

export const addUserValidator = z.object({
  username: z
    .string()
    .min(3, "username must me at lest 3 character long")
    .toLowerCase()
    //Checking if username exist
    .refine(
      async (v) => {
        const foundUser = await UserModel.findOne({ username: v });
        return foundUser === null;
      },
      { message: "UserName is Already Taken" }
    ),

  email: z
    .string()
    .email("invalid email")
    .toLowerCase()
    .refine(
      async (v) => {
        const foundUser = await UserModel.findOne({ email: v });
        return foundUser === null;
      },
      { message: "This Email is already Registered" }
    ),
  password: z.string().min(8, "Password must be at least 8 character long"),
  role: z.enum(["admin", "author"], {
    invalid_type_error: "Only 'admin' and 'author' are allowed to sign up",
    required_error: "Please Select user role",
  }),
});
