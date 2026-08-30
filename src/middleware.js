import { NextResponse } from "next/server";

export async function middleware(request) {
    
    const sessionToken = request.cookies.get("better-auth.session_token")?.value;

    
    if (!sessionToken) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/all-appointment/:id*",
        "/dashboard/:path*",
    ],
};

