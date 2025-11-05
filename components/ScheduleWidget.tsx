"use client";

import React, { useState } from "react";
import { topAiringAnime, mostPopularAnime, latestEpisodes } from "@/data/anime";

const days = [
  "Today",
  "Tomorrow",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const weekDates = [
  "Sun Jun 8",
  "Mon Jun 9",
  "Tue Jun 10",
  "Wed Jun 11",
  "Thu Jun 12",
  "Fri Jun 13",
  "Sat Jun 14",
];

// Helper to assign anime to days/dates for demo
function buildSchedule() {
  const allAnime = [
    ...topAiringAnime,
    ...mostPopularAnime,
    ...(latestEpisodes || []),
  ];
  const schedule = [];
  for (let i = 0; i < allAnime.length; i++) {
    const anime = allAnime[i];
    // Distribute across days and dates
    const day = days[i % days.length];
    const date = i % weekDates.length;
    schedule.push({
      title: anime.title,
      episode: anime.episodeNumber || anime.stats?.episode || 1,
      time: `${6 + (i % 12)}:00:00 ${i % 2 === 0 ? "am" : "pm"}`,
      image: anime.image,
      day,
      date,
    });
  }
  return schedule;
}

const scheduleData = buildSchedule();

function getCurrentDateTime() {
  return new Date().toLocaleString("en-US", { timeZoneName: "short" });
}

export default function ScheduleWidget() {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [selectedDate, setSelectedDate] = useState(0); // index in weekDates
  const [showAll, setShowAll] = useState(false);

  // Filter schedule by selected day/date
  const filtered = scheduleData.filter(
    (item) => item.day === selectedDay && item.date === selectedDate
  );
  const visible = showAll ? filtered : filtered.slice(0, 3);

  return (
    <section className="w-full max-w-5xl mx-auto mt-0 mb-8">
      <div className="bg-[#191a23] rounded-xl p-8 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Estimated Schedule</h2>
          <span className="text-xs text-gray-400">{getCurrentDateTime()}</span>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <button
            className="bg-[#23243a] text-white rounded-full w-8 h-8 flex items-center justify-center"
            onClick={() =>
              setSelectedDate((d) => (d === 0 ? weekDates.length - 1 : d - 1))
            }
          >
            &#60;
          </button>
          {weekDates.map((date, i) => (
            <button
              key={date}
              className={`px-6 py-3 rounded-lg font-medium text-sm focus:outline-none transition-colors ${
                selectedDate === i
                  ? "bg-pink-600 text-white"
                  : "bg-[#23243a] text-gray-200 hover:bg-[#23243a]/80"
              }`}
              onClick={() => setSelectedDate(i)}
            >
              {date}
            </button>
          ))}
          <button
            className="bg-[#23243a] text-white rounded-full w-8 h-8 flex items-center justify-center"
            onClick={() =>
              setSelectedDate((d) => (d === weekDates.length - 1 ? 0 : d + 1))
            }
          >
            &#62;
          </button>
        </div>
        <div className="space-y-4">
          {visible.length === 0 ? (
            <div className="text-gray-400">No schedule for this day/date.</div>
          ) : (
            visible.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center bg-[#23243a] rounded-lg p-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 rounded mr-4 object-cover"
                />
                <div>
                  <div className="text-white font-semibold">{item.title}</div>
                  <div className="text-xs text-gray-400">
                    Episode {item.episode}
                  </div>
                  <div className="text-xs text-gray-400">{item.time}</div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="mt-4">
          <button
            className="text-blue-400 hover:underline text-sm"
            onClick={() => setShowAll((v) => !v)}
          >
            {showAll ? "Show less" : "Show more"}
          </button>
        </div>
      </div>
    </section>
  );
}
