import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = decodeURIComponent(request.nextUrl.pathname)
  console.log("this is the pathname bto", pathname)
  
  // Skip ALL processing for landing page routes
  if (pathname === '/hair-transplant-turkey' ||
      pathname === '/sac-ekimi-turkiye' ||
      pathname === '/greffe-cheveux-turquie' ||
      pathname === '/haartransplantation-tuerkei' ||
      pathname === '/trapianto-capelli-turchia') {
    console.log("Skipping ALL processing for landing page:", pathname)
    return NextResponse.next()
  }
  
  console.log("Processing normal route:", pathname)
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except for the ones below
    '/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'
  ]
} 