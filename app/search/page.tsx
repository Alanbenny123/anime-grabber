import CatalogPage, { parseCatalogPage } from "@/components/CatalogPage";

export const dynamic = "force-dynamic";
export const metadata = { title: "Search Anime - AnimeGrabber" };

export default function SearchPage({ searchParams }: { searchParams: { q?: string; page?: string } }) {
  const query = (searchParams.q || "").trim().slice(0, 100);
  if (!query) {
    return <main className="container mx-auto px-4 py-8"><h1 className="text-3xl font-bold">Search anime</h1><p className="mt-4 text-gray-400">Enter a title in the search box above.</p></main>;
  }
  return (
    <CatalogPage
      title={`Search results for “${query}”`}
      baseUrl={`/search?q=${encodeURIComponent(query)}`}
      page={parseCatalogPage(searchParams.page)}
      source={{ kind: "search", query }}
    />
  );
}
