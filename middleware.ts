import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerifyCustom } from "@/lib/utils/jwtUtils";
import { errorResponse } from "@/lib/server/helper/responseBuilder";

export async function middleware(request: NextRequest) {
  const token = request.headers.get("token") || request.cookies.get("token")?.value;

  try {
    if (request.nextUrl.pathname.startsWith("/api")) {
      if (token && token.startsWith("Bearer ")) {
        await jwtVerifyCustom(token.split(" ")[1]);
        return NextResponse.next();
      } else {
        return errorResponse(null, "Unauthorized", 401);
      }
    }

    if (request.nextUrl.pathname === "/admin/signin") {
      if (token && token.startsWith("Bearer ")) {
        return NextResponse.redirect(new URL("/admin", request.url));
      } else {
        return NextResponse.next();
      }
    } else {
      if (token && token.startsWith("Bearer ")) {
        await jwtVerifyCustom(token.split(" ")[1]);
        return NextResponse.next();
      } else {
        return NextResponse.redirect(new URL("/admin/signin", request.url));
      }
    }
  } catch (err) {
    console.log(err);
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin/(.*)", "/admin", "/api/image/upload"],
};
