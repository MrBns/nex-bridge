import mongoose, { model, Schema } from "mongoose";

export interface IBlogSchema {
  title: string;
  thumbnail: string;
  html: string;
  tags: string[];
  views: number;
  short_desc: string;
  author: Schema.Types.ObjectId;
  createdAt: Date,
  updatedAt:Date,
}
interface IBlogDocument extends mongoose.Document, IBlogSchema {}

const blogSchema = new Schema<IBlogDocument>(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    thumbnail: {
      type: String,
      default: "",
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
    short_desc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default (mongoose.models.Blogs as mongoose.Model<IBlogSchema>) || model("Blogs", blogSchema);
