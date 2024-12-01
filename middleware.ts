import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { decrypt } from "./lib/session/session";

// Define the protected routes
const protectedRoutes = [
  "/dashboard", // Add other protected routes here
  "/profile",
  "/settings",
];

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next();

  //Check if route is protected
  const currentPath = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(currentPath);

  if (isProtectedRoute) {
    //check for valid session
    const cookie = cookies().get("session")?.value as any;
    const session = (await decrypt(cookie)) as any;

    // Redirect unauthed users
    // if (!session && !session?.userId) {
    //   return NextResponse.redirect(new URL("/login", req.nextUrl));
    // }
  }

  // if user is not signed in and the current path is not /login redirect the user to /login
  // if (!isProtectedRoute && req.nextUrl.pathname !== "/login" && req.nextUrl.pathname !== "/signup") {
  //   //return NextResponse.redirect(new URL("/login", req.url));
  // }

  //Render Route
  return NextResponse.next();
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes) login only
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api/login|_next/static|images|favicon.ico).*)",
  ],
};
