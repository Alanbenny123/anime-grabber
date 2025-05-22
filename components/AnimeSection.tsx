import Link from "next/link";
import AnimeCard from "./AnimeCard";

interface AnimeSectionProps {
  title: string;
  viewAllLink?: string;
  animeList: Array<{
    id: string;
    title: string;
    image: string;
    type?: string;
    episodeNumber?: number;
    rating?: number;
  }>;
}

export default function AnimeSection({
  title,
  viewAllLink,
  animeList,
}: AnimeSectionProps) {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">{title}</h2>
          {viewAllLink && (
            <Link
              href={viewAllLink}
              className="text-sm text-blue-500 hover:text-blue-400"
            >
              View All
            </Link>
          )}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {animeList.map((anime) => (
            <AnimeCard
              key={anime.id}
              id={anime.id}
              title={anime.title}
              image={anime.image}
              type={anime.type}
              episodeNumber={anime.episodeNumber}
              rating={anime.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
