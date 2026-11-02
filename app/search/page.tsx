import CatalogPage, { parseCatalogPage } from "@/components/CatalogPage";

export const dynamic = "force-dynamic";
export const metadata = { title: "Search Anime - AnimeGrabber" };

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string; page?: string }> }) {
  const { q, page } = await searchParams;
  const query = (q || "").trim().slice(0, 100);
  if (!query) {
    return <main className="container mx-auto px-4 py-8"><h1 className="text-3xl font-bold">Search anime</h1><p className="mt-4 text-gray-400">Enter a title in the search box above.</p></main>;
  }
  return (
    <CatalogPage
      title={`Search results for “${query}”`}
      baseUrl={`/search?q=${encodeURIComponent(query)}`}
      page={parseCatalogPage(page)}
      source={{ kind: "search", query }}
    />
  );
}
