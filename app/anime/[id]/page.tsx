import Link from "next/link";
import { notFound } from "next/navigation";
import StreamingOptions from "@/components/StreamingOptions";
import { getAnimeById, JikanHttpError } from "@/lib/api/jikan";

export const dynamic = "force-dynamic";

export default async function AnimeDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: rawId } = await params;
  if (!/^[1-9]\d*$/.test(rawId)) notFound();
  const id = Number(rawId);
  if (!Number.isSafeInteger(id)) notFound();

  let anime;
  try {
    anime = (await getAnimeById(id)).data;
  } catch (error) {
    if (error instanceof JikanHttpError && error.status === 404) notFound();
    console.error(`Could not load anime ${id}:`, error);
    return (
      <main className="container mx-auto px-4 py-16 min-h-screen">
        <h1 className="text-2xl font-bold mb-3">Anime details unavailable</h1>
        <p className="text-gray-400 mb-5">Please try again later.</p>
        <Link href="/" className="text-blue-300">Return home</Link>
      </main>
    );
  }

  const title = anime.title_english || anime.title;
  const youtubeId = anime.trailer?.youtube_id;
  const hasTrailer = youtubeId && /^[\w-]{11}$/.test(youtubeId);

  return (
    <main className="min-h-screen bg-[#18181c] text-white py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link href="/" className="text-blue-300 hover:text-blue-200 text-sm">← Home</Link>
        <h1 className="text-3xl font-bold mt-4 mb-4">{title}</h1>
        <div className="flex flex-wrap gap-3 text-sm text-gray-300 mb-6">
          {anime.type && <span>{anime.type}</span>}
          {anime.episodes && <span>{anime.episodes} episodes</span>}
          {anime.score && <span>★ {anime.score.toFixed(1)}/10</span>}
          {anime.status && <span>{anime.status}</span>}
        </div>

        <section aria-label="Trailer">
          <h2 className="text-xl font-semibold mb-3">Trailer</h2>
          {hasTrailer ? (
            <div className="aspect-video rounded-lg overflow-hidden bg-black">
              <iframe
                title={`${title} trailer`}
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="aspect-video rounded-lg bg-[#23243a] flex items-center justify-center text-gray-400">
              No trailer is available for this title.
            </div>
          )}
        </section>

        <p className="mt-5 text-sm text-gray-400">
          Episode count is catalog information. This page does not host full episodes.
        </p>
        {anime.synopsis && (
          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-3">Synopsis</h2>
            <p className="text-gray-300 leading-relaxed">{anime.synopsis}</p>
          </section>
        )}
        {anime.genres?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-6">
            {anime.genres.map((genre) => (
              <span key={genre.mal_id} className="px-3 py-1 rounded bg-blue-600/20 text-blue-200 text-sm">{genre.name}</span>
            ))}
          </div>
        )}
        <StreamingOptions links={anime.streaming || []} malId={anime.mal_id} />
      </div>
    </main>
  );
}
