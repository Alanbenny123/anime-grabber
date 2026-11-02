import { redirect } from "next/navigation";

export default function LegacyGenrePage({ params }: { params: { slug: string; page: string } }) {
  redirect(`/genre/${encodeURIComponent(params.slug)}?page=${encodeURIComponent(params.page)}`);
}
