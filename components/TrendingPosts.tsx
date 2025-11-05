"use client";

import React from "react";

const trendingPosts = [
  {
    user: "killua",
    time: "12 hours ago",
    title:
      "Everyone, please suggest me a good anime to watch with my girlfriend.",
    content:
      "So I recently proposed to my crush and we got together, now we are planning to watch an anime with her. I haven't watched much rom coms, suggest me a good one which is oriented to...",
    replies: 124,
  },
  {
    user: "killua",
    time: "an hour ago",
    title: "Letting the comments make an anime.",
    content: "...",
    replies: 33,
  },
];

export default function TrendingPosts() {
  return (
    <section className="w-full max-w-4xl mx-auto mt-8 mb-8">
      <h2 className="text-lg font-bold text-white mb-4">Trending Posts</h2>
      <div className="bg-[#191a23] rounded-xl p-6 shadow-lg">
        {trendingPosts.map((post, idx) => (
          <div key={idx} className="mb-6 last:mb-0">
            <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
              <span className="font-medium text-blue-400">#General</span>
              <span>•</span>
              <span>{post.time}</span>
            </div>
            <div className="text-white font-semibold mb-1">{post.title}</div>
            <div className="text-gray-300 text-sm mb-2">{post.content}</div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <img
                  src="https://via.placeholder.com/20x20?text=U"
                  alt={post.user}
                  className="rounded-full w-5 h-5"
                />
                {post.user}
              </span>
              <span>•</span>
              <span>{post.replies}</span>
            </div>
          </div>
        ))}
        <div className="mt-2">
          <button className="text-blue-400 hover:underline text-sm">
            Show more
          </button>
        </div>
      </div>
    </section>
  );
}
