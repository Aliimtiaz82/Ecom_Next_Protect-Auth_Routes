
import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('authToken')?.value;
  const path = request.nextUrl.pathname;


  if (!token && path !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url));
  }


  if (token && path === '/login') {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/login', '/home/:path*', '/contact/:path*', '/service/:path*'  , '/about/:path*'],
};


