"use client";

import Image from "next/image";
import Link from "next/link";

interface AnimeCardProps {
  id: string;
  title: string;
  image: string;
  type?: string;
  episodeNumber?: number;
  rating?: number;
  stats?: {
    views?: number;
    likes?: number;
    episode?: number;
  };
}

export default function AnimeCard({
  id,
  title,
  image,
  type,
  episodeNumber,
  rating,
  stats,
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

          {stats?.episode && (
            <div className="absolute top-2 right-2 bg-gray-900/80 text-xs font-medium px-2 py-1 rounded">
              EP {stats.episode}
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
        {stats && (
          <div className="flex gap-3 mt-2 text-sm text-gray-400">
            {stats.views !== undefined && (
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
                {stats.views}
              </div>
            )}
            {stats.likes !== undefined && (
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                {stats.likes}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
