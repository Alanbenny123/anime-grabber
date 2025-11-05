import Footer from "../../components/Footer";

export const metadata = {
  title: "About AnimeGrabber - Watch Anime Online For Free",
  description:
    "Learn more about AnimeGrabber, the best site to watch anime online for free in HD quality.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] py-8 pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          About AnimeGrabber
        </h1>

        <div className="bg-[#171717] rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            What is AnimeGrabber?
          </h2>
          <p className="text-gray-300 mb-6">
            AnimeGrabber is a free site to watch anime and you can even download
            subbed or dubbed anime in ultra HD quality without any registration
            or payment. By having only one ads in all kinds, we are trying to
            make it the safest site for free anime.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Is AnimeGrabber safe?
          </h2>
          <p className="text-gray-300 mb-6">
            Yes we are, we do have only one Ads to cover the server cost and we
            keep scanning the ads 24/7 to make sure all are clean. If you find
            any ads that is suspicious, please forward us the info and we will
            remove it.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            What makes AnimeGrabber the best site to watch anime free online?
          </h2>
          <p className="text-gray-300 mb-6">
            Before building AnimeGrabber, we&apos;ve checked many other free
            anime sites, and learnt from them. We only keep the good things and
            remove all the bad things from all the competitors, to put it in our
            AnimeGrabber website. Let&apos;s see how we&apos;re so confident
            about being the best site for anime streaming:
          </p>

          <ul className="list-disc list-inside text-gray-300 space-y-4 mb-6 ml-4">
            <li className="pl-2">
              <span className="font-semibold text-white">Safety:</span> We try
              our best to not having harmful ads on AnimeGrabber.
            </li>
            <li className="pl-2">
              <span className="font-semibold text-white">Content library:</span>{" "}
              Our main focus is anime. You can find here popular, classic, as
              well as current titles from all genres such as action, drama,
              kids, fantasy, horror, mystery, police, romance, school, comedy,
              music, game and many more. All these titles come with English
              subtitles or are dubbed in many languages.
            </li>
            <li className="pl-2">
              <span className="font-semibold text-white">
                Quality/Resolution:
              </span>{" "}
              All titles are in excellent resolution, the best quality possible.
              AnimeGrabber also has a quality setting function to make sure our
              users can enjoy streaming no matter how fast your Internet speed
              is. You can stream the anime at 360p if your Internet is being
              ridiculous, Or if it is good, you can go with 720p or even 1080p
              anime.
            </li>
            <li className="pl-2">
              <span className="font-semibold text-white">
                Streaming experience:
              </span>{" "}
              Compared to other anime streaming sites, the loading speed at
              AnimeGrabber is faster. Downloading is just as easy as streaming,
              you won&apos;t have any problem saving the videos to watch offline
              later.
            </li>
            <li className="pl-2">
              <span className="font-semibold text-white">Updates:</span> We
              updates new titles as well as fulfill the requests on a daily
              basis so be warned, you will never run out of what to watch on
              AnimeGrabber.
            </li>
            <li className="pl-2">
              <span className="font-semibold text-white">User interface:</span>{" "}
              Our UI and UX makes it easy for anyone, no matter how old you are,
              how long have you been on the Internet. Literally, you can figure
              out how to navigate our site after a quick look. If you want to
              watch a specific title, search for it via the search box. If you
              want to look for suggestions, you can use the site&apos;s
              categories or simply scroll down for new releases.
            </li>
            <li className="pl-2">
              <span className="font-semibold text-white">
                Device compatibility:
              </span>{" "}
              AnimeGrabber works alright on both your mobile and desktop.
              However, we&apos;d recommend you use your desktop for a smoother
              streaming experience.
            </li>
            <li className="pl-2">
              <span className="font-semibold text-white">Customer care:</span>{" "}
              We are in active mode 24/7. You can always contact us for any
              help, query, or business-related inquiry. On our previous
              projects, we were known for our great customer service as we were
              quick to fix broken links or upload requested content.
            </li>
          </ul>

          <p className="text-gray-300 mb-6">
            So if you&apos;re looking for a trustworthy and safe site for your
            Anime streaming, let&apos;s give AnimeGrabber a try. And if you like
            us, please help us to spread the words and do not forget to bookmark
            our site.
          </p>

          <p className="text-gray-300 font-semibold">Thank you!</p>
        </div>
      </div>
    </main>
  );
}
