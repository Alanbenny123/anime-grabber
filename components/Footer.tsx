"use client";

import Link from "next/link";
import { FaDiscord, FaTelegram, FaReddit, FaTwitter } from "react-icons/fa";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import AZList from "./AZList";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Back to Top Widget */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-white hover:bg-gray-100 text-black p-2 rounded-full shadow-lg transition-all duration-300 ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <footer className="bg-[#1a1b25] text-gray-300">
        <div className="max-w-7xl mx-auto px-4">
          {/* Logo and Social Section */}
          <div className="flex items-center justify-between py-6 border-b border-gray-700">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-2xl font-bold text-white">
                AnimeWeb
              </Link>
            </div>
          </div>
          <AZList />
          {/* Bottom Section */}
          <div className="py-6">
            <div className="flex flex-wrap gap-6 text-sm mb-4">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of service
              </Link>
              <Link
                href="/dmca"
                className="text-gray-400 hover:text-white transition-colors"
              >
                DMCA
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
            <div className="text-sm text-gray-500">
              <p className="mb-2">
                AnimeWeb does not store any files on our server, we only linked
                to the media which is hosted on 3rd party services.
              </p>
              <p>© AnimeWeb.to. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
