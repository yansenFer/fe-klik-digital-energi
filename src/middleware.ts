import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const isLogin = req.cookies.get('isLogin')?.value === 'true'
  const { pathname } = req.nextUrl

  // 🚨 Skip middleware untuk assets & favicon
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/assets')
  ) {
    return NextResponse.next()
  }

  if (!isLogin && pathname !== '/login-page') {
    return NextResponse.redirect(new URL('/login-page', req.url))
  }

  if (isLogin && (pathname === '/login-page' || pathname === '/')) {
    return NextResponse.redirect(new URL('/home-page', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api).*)'],
}
