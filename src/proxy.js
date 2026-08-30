



import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Login না থাকলে home/login এ পাঠাবে
  if (!session?.user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Login থাকলে যেতে দেবে
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/all-appoinment/:id",
    "/dashboard/:path*",
  ],
};




