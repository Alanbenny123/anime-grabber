import { NextResponse } from "next/server";
import { getAnimeById } from "@/lib/api/jikan";

// GET /api/anime/[id]
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    if (!/^[1-9]\d*$/.test(params.id) || !Number.isSafeInteger(Number(params.id))) {
      return NextResponse.json({ error: "Invalid anime ID" }, { status: 400 });
    }
    const response = await getAnimeById(Number(params.id));
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error in /api/anime/[id]:", error);
    if (error instanceof Error && error.message.startsWith("HTTP 404:")) {
      return NextResponse.json({ error: "Anime not found" }, { status: 404 });
    }
    return NextResponse.json(
      { error: "Failed to fetch anime details" },
      { status: 500 }
    );
  }
}


