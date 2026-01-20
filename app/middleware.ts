// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const country = req.headers.get("x-vercel-ip-country") ?? "XX";
    const ab = req.cookies.get("ab")?.value ?? "A"
    const url = req.nextUrl;

    const res = NextResponse.next();
    res.headers.set("x-edge-country", country);
    res.headers.set("x-edge-ab", ab);

    if (url.pathname === "/pricing") {
        const variant = ab === "B" ? "/pricing-b" : "/pricing-a";
        return NextResponse.rewrite(new URL(variant, req.url), { headers: res.headers });
    }

    return res;
}

export const config = {
    matcher: ["/pricing", "/((?!_next/static|_next/image|favicon.ico).*)"],
};
