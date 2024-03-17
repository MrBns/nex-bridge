"use client";
import TipTap from "@/components/editor/TipTap";
import dynamic from "next/dynamic";

const BlogEditor = dynamic(
  () => {
    return import("@/components/editor/BlogCkEditor");
  },
  { ssr: false }
);

export default function CreateBlogPage() {
  return (
    <>
      <div className="dashboard-container text-black">
        <BlogEditor
          onBlur={(e, editor) => {
            console.log(editor.getData());
          }}
        />
      </div>
    </>
  );
}
