import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Watch Options - AnimeGrabber",
  description: "Check free and sample anime episodes from official services in India.",
};

const services = [
  {
    name: "Ani-One India",
    label: "Free on YouTube",
    description: "Watch the anime episodes Ani-One India publishes on its official channel. Some titles may require a channel membership.",
    url: "https://www.youtube.com/@anionein",
  },
  {
    name: "Amazon MX Player",
    label: "Free with ads",
    description: "Browse its free streaming catalog for anime available in India.",
    url: "https://www.mxplayer.in/",
  },
  {
    name: "Crunchyroll on SonyLIV",
    label: "Selected episodes free",
    description: "Sample the first two or three episodes of selected anime. Full series may require a subscription.",
    url: "https://www.sonyliv.com/",
  },
];

export default function FreeWatchPage() {
  return (
    <main className="container mx-auto max-w-6xl px-4 py-12 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Free watch options</h1>
      <p className="text-gray-300 max-w-3xl mb-8">
        Check these official services for free anime or sample episodes in India.
        Availability varies by title and region, so a listing here does not mean
        every anime on AnimeGrabber can be watched for free.
      </p>
      <div className="grid gap-5 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.name} className="rounded-xl bg-[#1a1b25] border border-gray-700 p-6 flex flex-col">
            <span className="text-sm text-blue-300 mb-3">{service.label}</span>
            <h2 className="text-xl font-semibold mb-3">{service.name}</h2>
            <p className="text-gray-300 mb-6 flex-1">{service.description}</p>
            <a
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block self-start rounded-full bg-blue-600 px-5 py-2 font-medium hover:bg-blue-700"
            >
              Visit service ↗
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}
