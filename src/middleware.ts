
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const app = (req: NextRequest) => {
    const headers = new Headers(req.headers);

    const pathname = req.nextUrl.pathname;

    headers.set("x-current-path", pathname);

    return NextResponse.next({ headers });
};

const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
};

export default app;
export { config };