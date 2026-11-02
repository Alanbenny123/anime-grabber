import { redirect } from "next/navigation";

export default async function LegacyGenrePage({ params }: { params: Promise<{ slug: string; page: string }> }) {
  const { slug, page } = await params;
  redirect(`/genre/${encodeURIComponent(slug)}?page=${encodeURIComponent(page)}`);
}
