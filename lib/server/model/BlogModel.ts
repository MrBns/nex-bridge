import mongoose, { model, Schema } from "mongoose";

const blogSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    html: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    tags: [{ type: String, required: true, trim: true }],
    views: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Blogs || model("Blogs", blogSchema);
