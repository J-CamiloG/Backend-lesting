import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { AUTH_COOKIE_NAME } from "@/lib/cookies"

export function middleware(request: NextRequest) {
  // Verificar autenticación usando la cookie
  const authToken = request.cookies.get(AUTH_COOKIE_NAME)
  
  // Si el usuario intenta acceder al dashboard sin autenticación
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!authToken?.value) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  // Si el usuario está autenticado e intenta acceder a login o register
  if (request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/register") {
    if (authToken?.value) {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
}

