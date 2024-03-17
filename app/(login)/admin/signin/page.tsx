"use client";

import { LoginResult, handleLogin } from "@/lib/actions/handleLogin";
import { useState } from "react";

export default function Page() {
  const [result, setResult] = useState<LoginResult>();

  async function clientLoginAction(formData: FormData) {
    const result = await handleLogin(formData);
    if (result.success) {
      localStorage.setItem("token", result.data?.token ?? "");
      localStorage.setItem("tokenDuration", result.data?.tokenDuration ?? "");
      localStorage.setItem("user", JSON.stringify(result.data?.user) ?? "");
      window.location.href = "/admin";
    }
    setResult(result);
  }

  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-gray-950">
      <div className="min-w-[350px] bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-200">Welcome Back!</h1>
        <form action={clientLoginAction}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium  mb-2">
              Username
            </label>
            <input
              name="username"
              className="text-black shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="johndoe"
              required
            />
            {result?.errors?.email ? <p className="text-red-500 text-[11px] mt-2">*{result?.errors?.email ?? ""}</p> : null}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium  mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="text-black shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
              required
            />
            {result?.errors?.password ? <p className="text-red-500 text-[11px] mt-2">*{result?.errors?.password ?? ""}</p> : null}
          </div>
          {result?.error ? <p className="text-red-500 text-[11px] my-2">*{result.message}</p> : null}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
