import { NextResponse } from "next/server";
import { JikanHttpError } from "@/lib/api/jikan";

export function jikanErrorResponse(error: unknown): NextResponse {
  if (error instanceof JikanHttpError && error.status === 404) {
    return NextResponse.json({ error: "Anime not found" }, { status: 404 });
  }
  if (error instanceof JikanHttpError && (error.status === 429 || error.status >= 500)) {
    return NextResponse.json(
      { error: "Anime data is temporarily unavailable" },
      { status: 503, headers: { "Retry-After": "5" } }
    );
  }
  return NextResponse.json({ error: "Could not retrieve anime data" }, { status: 502 });
}
