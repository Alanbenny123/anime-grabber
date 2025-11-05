"use client";

import React, { useState } from "react";

interface StreamingLink {
  name: string;
  url: string;
  icon: string;
  searchUrl: string;
  type: "official" | "alternative";
}

interface StreamingOptionsProps {
  animeTitle: string;
  malId?: number;
}

// Alternative providers (linking only, not embedding)
const STREAMING_SERVICES: StreamingLink[] = [
  {
    name: "HiAnime",
    url: "https://hianime.to",
    icon: "🔗",
    searchUrl: "https://hianime.to/search?keyword=",
    type: "alternative",
  },
  {
    name: "9anime",
    url: "https://9anime.to",
    icon: "🔗",
    searchUrl: "https://9anime.to/search?keyword=",
    type: "alternative",
  },
  {
    name: "Kuudere",
    url: "https://kuudere.to",
    icon: "🔗",
    searchUrl: "https://kuudere.to/search?keyword=",
    type: "alternative",
  },
];

export default function StreamingOptions({
  animeTitle,
  malId,
}: StreamingOptionsProps) {
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);

  // Generate search URLs
  const getSearchUrl = (service: StreamingLink) => {
    const searchQuery = encodeURIComponent(animeTitle);
    return `${service.searchUrl}${searchQuery}`;
  };

  // Handle redirect to provider
  const handleRedirect = (service: StreamingLink) => {
    const url = getSearchUrl(service);
    // Open in new tab
    window.open(url, "_blank", "noopener,noreferrer");
    setSelectedProvider(service.name);
  };

  return (
    <div className="bg-[#23243a] rounded-lg p-6 mt-6">
      <h3 className="text-lg font-bold mb-4 text-white">
        Watch on Streaming Services
      </h3>
      <p className="text-sm text-gray-400 mb-4">
        Search for "{animeTitle}" on these platforms:
      </p>

      {/* Providers */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {STREAMING_SERVICES.map((service) => (
          <button
            key={service.name}
            onClick={() => handleRedirect(service)}
            className="flex items-center gap-3 p-3 bg-[#1a1a2e] hover:bg-[#2a2a3e] rounded-lg transition-colors border border-transparent hover:border-pink-600 text-left"
          >
            <span className="text-2xl">{service.icon}</span>
            <div>
              <div className="font-semibold text-white text-sm">
                {service.name}
              </div>
              <div className="text-xs text-gray-400">External Link</div>
            </div>
          </button>
        ))}
      </div>
      <div className="mt-3 text-xs text-gray-500 italic">
        * Opens in new tab - you'll be redirected to the provider's website
      </div>

      {malId && (
        <div className="mt-4 pt-4 border-t border-gray-700">
          <a
            href={`https://myanimelist.net/anime/${malId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-sm"
          >
            View on MyAnimeList →
          </a>
        </div>
      )}
    </div>
  );
}

