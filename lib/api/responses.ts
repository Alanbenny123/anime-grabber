import { NextResponse } from "next/server";
import { AnimeApiHttpError } from "@/lib/api/jikan";

export function animeApiErrorResponse(error: unknown): NextResponse {
  if (error instanceof AnimeApiHttpError && error.status === 404) {
    return NextResponse.json({ error: "Anime not found" }, { status: 404 });
  }
  if (error instanceof AnimeApiHttpError && (error.status === 429 || error.status >= 500)) {
    return NextResponse.json(
      { error: "Anime data is temporarily unavailable" },
      { status: 503, headers: { "Retry-After": "5" } }
    );
  }
  return NextResponse.json({ error: "Could not retrieve anime data" }, { status: 502 });
}
