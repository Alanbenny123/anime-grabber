import { redirect } from "next/navigation";

export default async function LegacySeasonPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  redirect(`/this-season?page=${encodeURIComponent(page)}`);
}
