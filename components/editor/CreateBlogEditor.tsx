"use client";
import Head from "next/head";
import { ReactNode, useEffect } from "react";
import "quill/dist/quill.snow.css";
import { default as QuillAsType } from "quill";

interface PropsType {
  children?: ReactNode;
}

let quill: QuillAsType | null;

export default function CreateBlogEditor({ ...props }: PropsType) {
  useEffect(() => {
    import("quill").then(({ default: Quill }) => {
      if (quill) return;
      quill = new Quill("#editor", {
        modules: {
          toolbar: "#toolbar-container",
        },
        theme: "snow",
      });
    });
  }, []);

  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/quill@2.0.0-rc.3/dist/quill.snow.css" rel="stylesheet" />
      </Head>
      <div className="">
        <div id="toolbar-container" className="text-white">
          <span className="ql-formats">
            <select className="ql-font"></select>
            <select className="ql-size"></select>
          </span>
          <span className="ql-formats">
            <button className="ql-bold"></button>
            <button className="ql-italic"></button>
            <button className="ql-underline"></button>
            <button className="ql-strike"></button>
          </span>
          <span className="ql-formats">
            <select className="ql-color"></select>
            <select className="ql-background"></select>
          </span>
          <span className="ql-formats">
            <button className="ql-script" value="sub"></button>
            <button className="ql-script" value="super"></button>
          </span>
          <span className="ql-formats">
            <button className="ql-header" value="1"></button>
            <button className="ql-header" value="2"></button>
            <button className="ql-blockquote"></button>
            <button className="ql-code-block"></button>
          </span>
          <span className="ql-formats">
            <button className="ql-list" value="ordered"></button>
            <button className="ql-list" value="bullet"></button>
            <button className="ql-indent" value="-1"></button>
            <button className="ql-indent" value="+1"></button>
          </span>
          <span className="ql-formats">
            <button className="ql-direction" value="rtl"></button>
            <select className="ql-align"></select>
          </span>
          <span className="ql-formats">
            <button className="ql-link"></button>
            <button className="ql-image"></button>
            <button className="ql-video"></button>
            <button className="ql-formula"></button>
          </span>
          <span className="ql-formats">
            <button className="ql-clean"></button>
          </span>
        </div>
        {/* <!-- Include stylesheet --> */}

        {/* <!-- Create the editor container --> */}
        <div id="editor">
          <p>Hello World!</p>
          <p>
            Some initial <strong>bold</strong> text
          </p>
          <p>
            <br />
          </p>
        </div>
      </div>
    </>
  );
}
