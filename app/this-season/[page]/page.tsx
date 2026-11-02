import { redirect } from "next/navigation";

export default function LegacySeasonPage({ params }: { params: { page: string } }) {
  redirect(`/this-season?page=${encodeURIComponent(params.page)}`);
}
