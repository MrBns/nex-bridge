import { NextResponse } from "next/server";

/* 
Utility Functions just returning NextResponse With Extra Property to maintain a Json Response Structure;
*/

const checkData = (obj: Record<string, unknown> | null | undefined) => (obj && Object.keys(obj as Object).length > 0 ? obj : null);

export function successResponse(data: Record<string, unknown> | null | undefined, msg = "Successful Response", status = 200): NextResponse {
  return NextResponse.json(
    {
      success: true,
      error: false,
      msg,
      data: checkData(data), //sending null if data is empty;
    },
    { status }
  );
}

export function errorResponse(data: Record<string, unknown> | null | undefined, msg = "Invalid Response", status = 503): NextResponse {
  return NextResponse.json(
    {
      success: false,
      error: true,
      msg,
      data: checkData(data), // sending null  if data is empty,
    },
    { status }
  );
}
