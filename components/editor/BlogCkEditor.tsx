// components/custom-editor.js
"use client";

import React, { useEffect, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import Editor from "ckeditor5";

const editorConfiguration = {
  //   toolbar: [
  //     "heading",
  //     "|",
  //     "bold",
  //     "italic",
  //     "link",
  //     "bulletedList",
  //     "numberedList",
  //     "|",
  //     "outdent",
  //     "indent",
  //     "|",
  //     "imageUpload",
  //     "blockQuote",
  //     "insertTable",
  //     "mediaEmbed",
  //     "undo",
  //     "redo",
  //   ],
};

interface PropsType {
  onChange?: CKEditor<Editor>["props"]["onChange"];
  onReady?: CKEditor<Editor>["props"]["onReady"];
  onBlur?: CKEditor<Editor>["props"]["onBlur"];
  onFocus?: CKEditor<Editor>["props"]["onFocus"];
  onError?: CKEditor<Editor>["props"]["onError"];
  initialData?: string;
}

function BlogEditor(props: PropsType) {
  return (
    <CKEditor
      editor={Editor}
      config={editorConfiguration}
      data={props.initialData}
      onReady={props?.onReady}
      onChange={props?.onChange}
      onBlur={props?.onBlur}
      onError={props?.onError}
      onFocus={props?.onFocus}
    />
  );
}

export default BlogEditor;
