"use client";
import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { Maximize, Minimize } from "lucide-react";

interface ExternalVideoPlayerProps {
  animeTitle: string;
  episodeNumber?: number;
  onRedirect?: () => void;
}

export default function ExternalVideoPlayer({
  animeTitle,
  episodeNumber = 1,
  onRedirect,
}: ExternalVideoPlayerProps) {
  const [embedFailed, setEmbedFailed] = useState(false);
  const [loadingVideo, setLoadingVideo] = useState(true);
  const [selectedProvider, setSelectedProvider] = useState("kuudere");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Construct embed URLs for different providers
  const getEmbedUrls = () => {
    const normalizedTitle = animeTitle.toLowerCase().replace(/\s+/g, "-");
    return {
      hianime: `https://hianime.to/watch/${normalizedTitle}-episode-${episodeNumber}`,
      kuudere: `https://kuudere.to/watch/${normalizedTitle}-episode-${episodeNumber}`,
      gogoanime: `https://gogoanime.fi/${normalizedTitle}-episode-${episodeNumber}`,
    };
  };

  const embedUrls = getEmbedUrls();

  // Try to load iframe
  useEffect(() => {
    setLoadingVideo(true);
    setEmbedFailed(false);
    
    // Try to detect if iframe loaded successfully
    const checkLoad = setTimeout(() => {
      if (iframeRef.current) {
        try {
          // Try to access iframe content (will fail if cross-origin)
          const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
          if (!iframeDoc) {
            // Iframe loaded but we can't access content (normal for cross-origin)
            // This means it's likely working
            setLoadingVideo(false);
          }
        } catch (e) {
          // Cross-origin error is expected and means iframe loaded
          setLoadingVideo(false);
        }
      }
    }, 3000);

    return () => clearTimeout(checkLoad);
  }, [selectedProvider, animeTitle, episodeNumber]);

  const handleProviderChange = (provider: string) => {
    setSelectedProvider(provider);
    setEmbedFailed(false);
    setLoadingVideo(true);
  };

  // Handle fullscreen
  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if ((containerRef.current as any).webkitRequestFullscreen) {
        (containerRef.current as any).webkitRequestFullscreen();
      } else if ((containerRef.current as any).mozRequestFullScreen) {
        (containerRef.current as any).mozRequestFullScreen();
      } else if ((containerRef.current as any).msRequestFullscreen) {
        (containerRef.current as any).msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      } else if ((document as any).mozCancelFullScreen) {
        (document as any).mozCancelFullScreen();
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen();
      }
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(
        !!(document.fullscreenElement ||
          (document as any).webkitFullscreenElement ||
          (document as any).mozFullScreenElement ||
          (document as any).msFullscreenElement)
      );
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullscreenChange
      );
    };
  }, []);

  const handleRedirect = (provider: string, url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    if (onRedirect) onRedirect();
  };

  return (
    <div ref={containerRef} className="aspect-video w-full bg-black relative">
      {/* Loading indicator */}
      {loadingVideo && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0f0f0f] z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto mb-4"></div>
            <div className="text-gray-400 text-sm">Loading video...</div>
          </div>
        </div>
      )}

      {/* Main iframe embed */}
      <iframe
        ref={iframeRef}
        src={embedUrls[selectedProvider as keyof typeof embedUrls]}
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        onLoad={() => {
          setLoadingVideo(false);
          setEmbedFailed(false);
        }}
        onError={() => {
          setEmbedFailed(true);
          setLoadingVideo(false);
        }}
        style={{ minHeight: "500px" }}
      />

      {/* Fullscreen button */}
      <button
        onClick={toggleFullscreen}
        className="absolute bottom-4 right-4 z-20 bg-black/70 hover:bg-black/90 text-white p-2 rounded transition-colors"
        aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
      >
        {isFullscreen ? (
          <Minimize className="w-5 h-5" />
        ) : (
          <Maximize className="w-5 h-5" />
        )}
      </button>

      {/* Provider selector overlay */}
      <div className="absolute top-4 right-4 z-20">
        <div className="flex gap-2 bg-black/80 rounded-lg p-2">
          <button
            onClick={() => handleProviderChange("hianime")}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              selectedProvider === "hianime"
                ? "bg-pink-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            HiAnime
          </button>
          <button
            onClick={() => handleProviderChange("kuudere")}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              selectedProvider === "kuudere"
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            Kuudere
          </button>
          <button
            onClick={() => handleProviderChange("gogoanime")}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              selectedProvider === "gogoanime"
                ? "bg-purple-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            Gogoanime
          </button>
        </div>
      </div>

      {/* Fallback if embed completely fails */}
      {embedFailed && (
        <div className="absolute inset-0 bg-black/90 flex items-center justify-center z-30">
          <div className="text-center p-8 max-w-md">
            <div className="text-4xl mb-4">🎬</div>
            <div className="text-xl font-semibold mb-2 text-white">
              Video Embedding Blocked
            </div>
            <div className="text-gray-400 mb-6 text-sm">
              The provider blocks embedding. Click below to watch on their website.
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => handleRedirect("HiAnime", embedUrls.hianime)}
                className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-medium transition-colors"
              >
                Watch on HiAnime
              </button>
              <button
                onClick={() => handleRedirect("Kuudere", embedUrls.kuudere)}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Watch on Kuudere
              </button>
              <button
                onClick={() => handleRedirect("Gogoanime", embedUrls.gogoanime)}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
              >
                Watch on Gogoanime
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

