import Image from "next/image";
import Link from "next/link";

interface HeroBannerProps {
  title: string;
  description: string;
  imageUrl: string;
  id: string;
  type?: string;
  rating?: number;
}

export default function HeroBanner({
  title,
  description,
  imageUrl,
  id,
  type,
  rating,
}: HeroBannerProps) {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12">
        <div className="max-w-2xl">
          <div className="flex gap-3 mb-3">
            {type && (
              <span className="bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded">
                {type}
              </span>
            )}
            {rating && (
              <div className="bg-yellow-500 text-gray-900 text-xs font-medium px-2 py-1 rounded flex items-center">
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
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            {title}
          </h1>
          <p className="text-gray-300 mb-6 line-clamp-3">{description}</p>
          <div className="flex gap-4">
            <Link
              href={`/anime/${id}`}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              Watch Now
            </Link>
            <Link
              href={`/anime/${id}`}
              className="bg-gray-800/80 hover:bg-gray-700/80 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
