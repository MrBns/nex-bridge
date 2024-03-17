import mongoose, { Schema, model } from "mongoose";

interface IUser extends mongoose.Document {
  username: string;
  first_name: string;
  last_name: string;
  profile_pic: string;
  password: string;
  email: string;
  role: "admin" | "author";
}

const userScheme = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    first_name: {
      type: String,
      trim: true,
    },
    last_name: {
      type: String,
      trim: true,
    },
    profile_pic: String,
    password: String,
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["admin", "author"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default (mongoose.models.Users as mongoose.Model<IUser>) || model("Users", userScheme);
