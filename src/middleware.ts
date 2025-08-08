import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const publicRoutes = new Set(["auth/register", "auth/login", "/"]);

  const path = request.nextUrl.pathname;
  const isPublicRoutes = publicRoutes.has(path);

  if (isPublicRoutes) {
  }

  return NextResponse.next();
}
