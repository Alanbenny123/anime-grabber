export const metadata = {
  title: "FAQ - AnimeGrabber",
  description: "Answers about searching and watching anime through AnimeGrabber.",
};

const questions = [
  {
    question: "Can I watch full episodes here?",
    answer: "No. AnimeGrabber shows anime information and available trailers. A title page may include links to streaming services listed by MyAnimeList.",
  },
  {
    question: "Do I need an account?",
    answer: "No account is needed to browse or search. AnimeGrabber does not currently offer accounts or watchlists.",
  },
  {
    question: "Where does the catalog data come from?",
    answer: "Anime titles, genres, ratings, and streaming links come from Tenrai's MyAnimeList catalog data.",
  },
  {
    question: "Why is a title or streaming link unavailable?",
    answer: "The catalog service may be temporarily unavailable, and streaming availability depends on the title, provider, and region.",
  },
];

export default function FAQPage() {
  return (
    <main className="container mx-auto px-4 py-12 min-h-screen max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {questions.map(({ question, answer }) => (
          <section key={question} className="bg-[#171717] rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{question}</h2>
            <p className="text-gray-300">{answer}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
