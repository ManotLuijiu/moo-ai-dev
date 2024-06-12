import { createLocaleRedirect } from "@prismicio/next";
import { createClient } from "./prismicio";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const client = createClient();
  const redirect = await createLocaleRedirect({ client, request });

  if (redirect) {
    return redirect;
  }
}

export const config = {
  // Do not localize these paths
  matcher: ["/((?!_next/static|_next/image|api|slice-simulator|favicon.ico|icon.png).*)"],
};
