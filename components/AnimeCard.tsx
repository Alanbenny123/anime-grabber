import Image from "next/image";
import Link from "next/link";

interface AnimeCardProps {
  id: string;
  title: string;
  image: string;
  type?: string;
  episodeNumber?: number;
  rating?: number;
}

export default function AnimeCard({
  id,
  title,
  image,
  type,
  episodeNumber,
  rating,
}: AnimeCardProps) {
  return (
    <div className="card group relative overflow-hidden">
      <Link href={`/anime/${id}`}>
        <div className="relative aspect-[2/3] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {type && (
            <div className="absolute top-2 left-2 bg-blue-500 text-xs font-medium px-2 py-1 rounded">
              {type}
            </div>
          )}

          {episodeNumber && (
            <div className="absolute top-2 right-2 bg-gray-900/80 text-xs font-medium px-2 py-1 rounded">
              EP {episodeNumber}
            </div>
          )}

          {rating && (
            <div className="absolute bottom-2 left-2 bg-yellow-500 text-gray-900 text-xs font-medium px-2 py-1 rounded flex items-center">
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {rating.toFixed(1)}
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
            <div className="text-white font-medium line-clamp-2">{title}</div>
          </div>
        </div>
      </Link>
      <div className="p-3">
        <Link href={`/anime/${id}`} className="block">
          <h3 className="font-medium text-white line-clamp-2 group-hover:text-blue-500 transition-colors duration-200">
            {title}
          </h3>
        </Link>
      </div>
    </div>
  );
}
