import { Schema, model } from "mongoose";

export default model(
  "user",
  new Schema(
    {
      username: {
        type: String,
        required: true,
        trim: true,
      },
      password: String,
      email: String,
    },

    {
      timestamps: true,
    }
  )
);
