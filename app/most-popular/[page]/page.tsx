import { redirect } from "next/navigation";

export default async function LegacyPopularPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  redirect(`/most-popular?page=${encodeURIComponent(page)}`);
}
