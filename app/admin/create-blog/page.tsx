"use client";
import TipTap from "@/components/editor/TipTap";
import getLocalUserInfo from "@/lib/client/getUserInfo";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { ZodError, z } from "zod";

const BlogEditor = dynamic(
  () => {
    return import("@/components/editor/BlogCkEditor");
  },
  { ssr: false }
);

const blogValidation = z.object({
  title: z.string().min(10, "Title Must be At Least 10 character Long"),
  short_desc: z.string().min(1, "Short Description Cannot be empty"),
  html: z.string().min(100, "Blog Content Must have 100 characters"),
});

export default function CreateBlogPage() {
  const blogTitleRef = useRef<HTMLTextAreaElement | null>(null);
  const blogShortDescRef = useRef<HTMLTextAreaElement | null>(null);
  const blogThumbnailRef = useRef<HTMLTextAreaElement | null>(null);
  const blogContentRef = useRef<string>("");
  const [error, setError] = useState<ZodError<z.infer<typeof blogValidation>>["formErrors"]>();

  useEffect(() => {
    console.log(blogContentRef.current);
  }, [blogContentRef.current]);

  async function handleSaveDraft() {
    const validated_data = await blogValidation.safeParseAsync({
      title: blogTitleRef.current?.value,
      short_desc: blogShortDescRef.current?.value,
      html: blogContentRef.current,
    });

    if (!validated_data.success) return setError(validated_data.error.formErrors);

    const user = await getLocalUserInfo();

    const data = await fetch(`${location.origin}/api/blog`, {
      method: "POST",
      body: JSON.stringify({
        ...validated_data.data,
        author: user._id,
        tags: ["testing", "development"],
      }),
    }).then((res) => res.json());
    console.log(data);
  }

  return (
    <>
      <div className="bg-slate-950 border-b flex  border-white/15 p-5 py-2 text-center sticky top-0 z-20">
        <div className="flex-1 text-end">
          <h5 className="text-xl">Create Blog</h5>
        </div>

        <div className="text-end flex-1">
          <button
            onClick={handleSaveDraft}
            className="text-slate-300 text-base bg-slate-900 p-2 py-1 rounded border-white/10 border hover:bg-slate-800 me-2"
          >
            Mark as Draft
          </button>
          <button className="text-slate-300 text-base bg-yellow-950 p-2 py-1 rounded border-white/10 border hover:bg-yellow-900">Publish</button>
        </div>
      </div>
      <div className="dashboard-container text-black">
        <div className="w-[900px] mx-auto">
          <div className="relative mb-10">
            <div className="w-full h-[300px] bg-gray-950 border border-white/10 rounded-2xl ">
              <img src="" alt="" />
            </div>

            <div className="buttons absolute bottom-3 right-3">
              <button className="text-slate-300 text-xs bg-slate-900 p-2 rounded border-white/10 border hover:bg-slate-800">Change Thumbnail</button>
            </div>
          </div>

          <div className="mb-5">
            <textarea
              id="first_name"
              ref={blogTitleRef}
              name="title"
              className="bg-transparent border min-h-[100px] border-white/10 focus:border-white/20  text-slate-300 bg-slate-950 p-3 text-xl rounded-lg block w-full focus:outline-none placeholder:text-slate-600"
              placeholder="Write Your Title Here"
              required
            />
            {error?.fieldErrors.title?.length && <p className="text-red-400">{error.fieldErrors.title?.[0]}</p>}
          </div>

          <div className="mb-5">
            <textarea
              id="short_desc"
              name="short_des"
              ref={blogShortDescRef}
              className="bg-transparent border min-h-[50px] border-white/10 focus:border-white/20  text-slate-300 bg-slate-950 p-3 text-base rounded-lg block w-full focus:outline-none placeholder:text-slate-600"
              placeholder="Write a Short Description about the blog"
              required
            />

            {error?.fieldErrors.short_desc?.length && <p className="text-red-400">{error.fieldErrors.short_desc?.[0]}</p>}
          </div>

          <div className="blog-editor mb-5">
            <label htmlFor="first_name" className="block mb-2 text-lg font-medium text-slate-400 ">
              Blog Content
            </label>
            <BlogEditor
              initialData={`<h2><strong>React Compiler</strong></h2><p>React Compiler is no longer a research project: the compiler now powers instagram.com in production, and we are working to ship the compiler across additional surfaces at Meta and to prepare the first open source release.</p><p>As discussed in our <a href="https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-optimizing-compiler">previous post</a>, React can <i>sometimes</i> re-render too much when state changes. Since the early days of React our solution for such cases has been manual memoization. In our current APIs, this means applying the <a href="https://react.dev/reference/react/useMemo">useMemo</a>, <a href="https://react.dev/reference/react/useCallback">useCallback</a>, and <a href="https://react.dev/reference/react/memo">memo</a> APIs to manually tune how much React re-renders on state changes. But manual memoization is a compromise. It clutters up our code, is easy to get wrong, and requires extra work to keep up to date.</p><p>Manual memoization is a reasonable compromise, but we weren’t satisfied. Our vision is for React to <i>automatically</i> re-render just the right parts of the UI when state changes, <i>without compromising on React’s core mental model</i>. We believe that React’s approach — UI as a simple function of state, with standard JavaScript values and idioms — is a key part of why React has been approachable for so many developers. That’s why we’ve invested in building an optimizing compiler for React.</p><p>JavaScript is a notoriously challenging language to optimize, thanks to its loose rules and dynamic nature. React Compiler is able to compile code safely by modeling both the rules of JavaScript <i>and</i> the “rules of React”. For example, React components must be idempotent — returning the same value given the same inputs — and can’t mutate props or state values. These rules limit what developers can do and help to carve out a safe space for the compiler to optimize.</p><p>Of course, we understand that developers sometimes bend the rules a bit, and our goal is to make React Compiler work out of the box on as much code as possible. The compiler attempts to detect when code doesn’t strictly follow React’s rules and will either compile the code where safe or skip compilation if it isn’t safe. We’re testing against Meta’s large and varied codebase in order to help validate this approach.</p><p>For developers who are curious about making sure their code follows React’s rules, we recommend <a href="https://react.dev/reference/react/StrictMode">enabling Strict Mode</a> and <a href="https://react.dev/learn/editor-setup#linting">configuring React’s ESLint plugin</a>. These tools can help to catch subtle bugs in your React code, improving the quality of your applications today, and future-proofs your applications for upcoming features such as React Compiler. We are also working on consolidated documentation of the rules of React and updates to our ESLint plugin to help teams understand and apply these rules to create more robust apps.</p><p>To see the compiler in action, you can check out our <a href="https://www.youtube.com/watch?v=qOQClO3g8-Y">talk from last fall</a>. At the time of the talk, we had early experimental data from trying React Compiler on one page of instagram.com. Since then, we shipped the compiler to production across instagram.com. We’ve also expanded our team to accelerate the rollout to additional surfaces at Meta and to open source. We’re excited about the path ahead and will have more to share in the coming months.</p><h2><strong>Actions</strong></h2><p>We <a href="https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components">previously shared</a> that we were exploring solutions for sending data from the client to the server with Server Actions, so that you can execute database mutations and implement forms. During development of Server Actions, we extended these APIs to support data handling in client-only applications as well.</p><p>We refer to this broader collection of features as simply “Actions”. Actions allow you to pass a function to DOM elements such as</p><p>The action function can operate synchronously or asynchronously. You can define them on the client side using standard JavaScript or on the server with the <a href="https://react.dev/reference/react/use-server">'use server'</a> directive. When using an action, React will manage the life cycle of the data submission for you, providing hooks like <a href="https://react.dev/reference/react-dom/hooks/useFormStatus">useFormStatus</a>, and <a href="https://react.dev/reference/react-dom/hooks/useFormState">useFormState</a> to access the current state and response of the form action.</p><p>By default, Actions are submitted within a <a href="https://react.dev/reference/react/useTransition">transition</a>, keeping the current page interactive while the action is processing. Since Actions support async functions, we’ve also added the ability to use async/await in transitions. This allows you to show pending UI with the isPending state of a transition when an async request like fetch starts, and show the pending UI all the way through the update being applied.</p><p>Alongside Actions, we’re introducing a feature named <a href="https://react.dev/reference/react/useOptimistic">useOptimistic</a> for managing optimistic state updates. With this hook, you can apply temporary updates that are automatically reverted once the final state commits. For Actions, this allows you to optimistically set the final state of the data on the client, assuming the submission is successful, and revert to the value for data received from the server. It works using regular async/await,</p><figure class="media"><oembed url="https://youtu.be/-AtfFUeeuIs?si=qfzyPXRNNthH1AiS"></oembed></figure><p>&nbsp;</p><p>&nbsp;</p>`}
              onReady={(editor) => {
                blogContentRef.current = editor.getData({ rootName: "main" });
              }}
              onBlur={(e, editor) => {
                // console.log({ data: String(editor.getData()) });
                blogContentRef.current = editor.getData({ rootName: "main" });
              }}
            />
            {error?.fieldErrors.html?.length && <p className="text-red-400">{error.fieldErrors.html?.[0]}</p>}
          </div>
        </div>
      </div>
    </>
  );
}
