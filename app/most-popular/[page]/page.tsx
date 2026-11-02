import { redirect } from "next/navigation";

export default function LegacyPopularPage({ params }: { params: { page: string } }) {
  redirect(`/most-popular?page=${encodeURIComponent(params.page)}`);
}
