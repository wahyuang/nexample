import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

export default withAuth(
  async function middleware(req) {
    // get jwt token
    const token = await getToken({ req });

    // isAuth if token exist
    const isAuth = !!token;

    // if visited page it auth page like login or register
    const isAuthPage =
      req.nextUrl.pathname.startsWith(`/login`) ||
      req.nextUrl.pathname.startsWith(`/register`);

    if (isAuthPage) {
      // if current page is login or register
      // and user is already sign in
      // redirect theme to dasboard page.
      if (isAuth) {
        return NextResponse.redirect(new URL(`/dashboard`, req.url));
      }

      return null;
    }

    // if usesr is not logged in,
    // and trying to access dashboard page,
    // redirect theme to login page.
    if (!isAuth) {
      let from = SITE_URL + `` + req.nextUrl.pathname;
      if (req.nextUrl.search) {
        from += req.nextUrl.search;
      }

      return NextResponse.redirect(
        new URL(`/login?from=${encodeURIComponent(from)}`, req.url)
      );
    }
    return null;
  },
  {
    callbacks: {
      // authorized callback must be setup
      // to run the logic above.
      authorized: async () => {
        return true;
      },
    },
  }
);

export const config = {
  matcher: [`/dashboard`, `/login`, `/register`],
};
