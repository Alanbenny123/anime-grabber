import { NextResponse } from "next/server";
import { getAnimeById } from "@/lib/api/jikan";
import { jikanErrorResponse } from "@/lib/api/responses";

// GET /api/anime/[id]
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!/^[1-9]\d*$/.test(id) || !Number.isSafeInteger(Number(id))) {
      return NextResponse.json({ error: "Invalid anime ID" }, { status: 400 });
    }
    const response = await getAnimeById(Number(id));
    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error in /api/anime/[id]:", error);
    return jikanErrorResponse(error);
  }
}


