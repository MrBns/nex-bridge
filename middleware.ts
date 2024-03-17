import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerifyCustom } from "./lib/utils/jwtUtils";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  try {
    if (request.nextUrl.pathname === "/admin/signin") {
      if (!token) {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(new URL("/admin", request.url));
      }
    } else {
      if (!token) {
        return NextResponse.redirect(new URL("/admin/signin", request.url));
      } else {
        await jwtVerifyCustom(token);
        return NextResponse.next();
      }
    }
  } catch (err) {
    console.log(err);
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin/(.*)", "/admin"],
};
