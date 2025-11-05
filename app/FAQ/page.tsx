import Footer from "../../components/Footer";

export const metadata = {
  title: "Frequently Asked Questions - AnimeGrabber",
  description:
    "Find answers to commonly asked questions about AnimeGrabber streaming service.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] py-8 pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Frequently Asked Questions
        </h1>

        <div className="bg-[#171717] rounded-lg p-6 md:p-8 mb-8">
          <div className="space-y-8">
            {/* General Questions */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                General Questions
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-blue-500 mb-2">
                    What is AnimeGrabber?
                  </h3>
                  <p className="text-gray-300">
                    AnimeGrabber is a free anime streaming website where you can
                    watch anime online in HD quality. We offer a vast collection
                    of anime series and movies with English subtitles and dubbed
                    versions.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-blue-500 mb-2">
                    Is AnimeGrabber free to use?
                  </h3>
                  <p className="text-gray-300">
                    Yes, AnimeGrabber is completely free to use. You can watch
                    all anime without paying any subscription fees. We are
                    supported by minimal advertisements to cover our server
                    costs.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-blue-500 mb-2">
                    Do I need to create an account?
                  </h3>
                  <p className="text-gray-300">
                    No, you don&apos;t need an account to watch anime on
                    AnimeGrabber. However, creating an account allows you to
                    track your watch history, create a watchlist, and receive
                    notifications for new episodes of your favorite shows.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Questions */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                Technical Questions
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-blue-500 mb-2">
                    What video quality is available?
                  </h3>
                  <p className="text-gray-300">
                    We offer multiple quality options ranging from 360p to 1080p
                    HD. You can select the quality that best suits your internet
                    connection speed.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-blue-500 mb-2">
                    Why is the video buffering?
                  </h3>
                  <p className="text-gray-300">
                    Buffering can occur due to slow internet connection or high
                    server load. Try lowering the video quality or checking your
                    internet connection. You can also try refreshing the page or
                    using a different browser.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-blue-500 mb-2">
                    Which devices are supported?
                  </h3>
                  <p className="text-gray-300">
                    AnimeGrabber works on all modern web browsers across desktop
                    and mobile devices. For the best experience, we recommend
                    using Chrome, Firefox, or Safari.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Questions */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                Content Questions
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-blue-500 mb-2">
                    How often is new content added?
                  </h3>
                  <p className="text-gray-300">
                    We update our library daily with new episodes and series.
                    Seasonal anime episodes are typically available within hours
                    of their original broadcast in Japan.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-blue-500 mb-2">
                    Do you have both subbed and dubbed anime?
                  </h3>
                  <p className="text-gray-300">
                    Yes, we provide both subbed (original Japanese audio with
                    English subtitles) and dubbed (English audio) versions when
                    available.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-blue-500 mb-2">
                    Can I request an anime to be added?
                  </h3>
                  <p className="text-gray-300">
                    Yes! You can submit anime requests through our contact form.
                    While we can&apos;t guarantee all requests will be
                    fulfilled, we do our best to add highly requested content.
                  </p>
                </div>
              </div>
            </div>

            {/* Legal Questions */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                Legal Questions
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-blue-500 mb-2">
                    Is AnimeGrabber legal?
                  </h3>
                  <p className="text-gray-300">
                    AnimeGrabber operates as a content aggregator and search
                    engine for anime content. We do not host any content
                    directly on our servers and work to respect intellectual
                    property rights.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-blue-500 mb-2">
                    What is your DMCA policy?
                  </h3>
                  <p className="text-gray-300">
                    We respect copyright laws and promptly respond to DMCA
                    takedown requests. If you believe your content has been
                    improperly shared, please contact us through our DMCA form.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
