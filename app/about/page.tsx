import Link from "next/link";

export const metadata = {
  title: "About AnimeGrabber",
  description: "Learn how AnimeGrabber helps you discover anime.",
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12 min-h-screen max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">About AnimeGrabber</h1>
      <p className="text-gray-300 mb-5">
        AnimeGrabber is an anime discovery site. It uses Jikan and MyAnimeList data to show titles, ratings, genres, and trailers.
      </p>
      <p className="text-gray-300 mb-5">
        Full episodes are not hosted here. Anime detail pages show streaming links listed by MyAnimeList when available. Availability varies by region and provider.
      </p>
      <Link href="/genre" className="text-blue-300 hover:text-blue-200">Browse by genre →</Link>
    </main>
  );
}
