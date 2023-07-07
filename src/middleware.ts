import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const isPublicPath = path === "/login" || path === "/signup"
    // ?. is optional channing operator and if the value is there then it return the value else undefined and || operator returns the value if the first operator is returning undefined.
    const token = request.cookies.get("token")?.value || ""
    if (isPublicPath && token) {
        return NextResponse.redirect(new URL("/", request.nextUrl))
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL("/login", request.nextUrl))
    }

}

// these url are the ones which will be checked 
export const config = {
    matcher: [
        "/",
        "/profile",
        "/login",
        "/signup",
        "/profile/:id*"
    ]
}