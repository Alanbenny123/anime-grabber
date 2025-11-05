"use client";
import React, { useState } from "react";

const azChars = ["All", "#", "0-9", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];

export default function AZList() {
  const [selected, setSelected] = useState("All");
  return (
    <div className="py-8">
      <div className="mb-2 flex items-center gap-4">
        <span className="text-2xl font-bold text-white">A-Z LIST</span>
        <span className="text-gray-400">
          Searching anime order by alphabet name A to Z.
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {azChars.map((char) => (
          <button
            key={char}
            className={`px-4 py-2 rounded font-medium text-base focus:outline-none transition-colors ${
              selected === char
                ? "bg-pink-600 text-white"
                : "bg-[#23243a] text-white hover:bg-[#35364a]"
            }`}
            onClick={() => setSelected(char)}
          >
            {char}
          </button>
        ))}
      </div>
    </div>
  );
}
