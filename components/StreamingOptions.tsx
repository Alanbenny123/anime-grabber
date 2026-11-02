interface StreamingOption {
  name: string;
  url: string;
}

export default function StreamingOptions({
  links,
  malId,
}: {
  links: StreamingOption[];
  malId: number;
}) {
  const safeLinks = links.filter((link) => {
    try {
      return new URL(link.url).protocol === "https:";
    } catch {
      return false;
    }
  });

  return (
    <section className="bg-[#23243a] rounded-lg p-6 mt-6">
      <h2 className="text-lg font-bold mb-2">Where to watch</h2>
      <p className="text-sm text-gray-400 mb-4">
        Streaming links listed by MyAnimeList. Availability depends on your region and subscription.
      </p>
      {safeLinks.length > 0 ? (
        <ul className="flex flex-wrap gap-3">
          {safeLinks.map((link) => (
            <li key={`${link.name}-${link.url}`}>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 rounded bg-blue-600 hover:bg-blue-700">
                {link.name} ↗
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">No streaming links are listed for this title.</p>
      )}
      <a href={`https://myanimelist.net/anime/${malId}`} target="_blank" rel="noopener noreferrer" className="inline-block mt-5 text-blue-300 hover:text-blue-200 text-sm">
        View on MyAnimeList ↗
      </a>
    </section>
  );
}
