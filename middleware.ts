import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import {routing} from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Si ya está en /en o /es → usar next-intl normal
  if (pathname.startsWith('/en') || pathname.startsWith('/es')) {
    return intlMiddleware(request);
  }

  // Evitar afectar bots
  const userAgent = request.headers.get('user-agent') || '';
  if (userAgent.includes('Googlebot')) {
    return NextResponse.redirect(new URL('/es', request.url));
  }

  // Detectar país (Vercel)
  const country = request.headers.get('x-vercel-ip-country');

  if (country === 'MX') {
    return NextResponse.redirect(new URL('/es', request.url));
  }

  if (country === 'US') {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  // Fallback por idioma del navegador
  const acceptLanguage = request.headers.get('accept-language');

  if (acceptLanguage?.startsWith('en')) {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  return NextResponse.redirect(new URL('/es', request.url));
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};