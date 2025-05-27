import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Frequently Asked Questions - AnimeGrabber",
  description:
    "Find answers to commonly asked questions about AnimeGrabber streaming service.",
};

export default function FAQPage() {
  return (
    <>
      <Header />
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
                      AnimeGrabber is a free anime streaming website where you
                      can watch anime online in HD quality. We offer a vast
                      collection of anime series and movies with English
                      subtitles and dubbed versions.
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
                      Do I need to create an account to watch anime?
                    </h3>
                    <p className="text-gray-300">
                      No, you don&lsquo;t need an account to watch anime on
                      AnimeGrabber. However, creating a free account gives you
                      benefits like tracking your watch history, creating a
                      watchlist, and getting personalized recommendations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-blue-500 mb-2">
                      Is AnimeGrabber legal?
                    </h3>
                    <p className="text-gray-300">
                      AnimeGrabber does not host any content on its servers. We
                      simply provide links to content hosted on third-party
                      servers. We comply with the Digital Millennium Copyright
                      Act (DMCA) and promptly remove links to content upon
                      receiving valid DMCA notices.
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
                      What types of anime can I find on AnimeGrabber?
                    </h3>
                    <p className="text-gray-300">
                      We offer a wide variety of anime including newly released
                      episodes, popular series, movies, OVAs, and classics. Our
                      collection spans across all genres like action, romance,
                      comedy, horror, fantasy, and more.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-blue-500 mb-2">
                      How often do you update with new episodes?
                    </h3>
                    <p className="text-gray-300">
                      We update our library as soon as new episodes are released
                      and subtitled, typically within hours of their original
                      broadcast in Japan. Simuldubs take a bit longer due to the
                      dubbing process.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-blue-500 mb-2">
                      Do you offer both subbed and dubbed anime?
                    </h3>
                    <p className="text-gray-300">
                      Yes, we provide both subbed (with English subtitles) and
                      dubbed (English voice acting) versions when available. You
                      can select your preferred version on the episode page.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-blue-500 mb-2">
                      Can I request an anime that isn&lsquo;t available?
                    </h3>
                    <p className="text-gray-300">
                      Yes! We welcome requests for anime that aren&lsquo;t currently
                      available on our site. You can submit requests through our
                      Contact Us page or join our Discord community to make
                      requests there.
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
                      Why is the video buffering or not loading?
                    </h3>
                    <p className="text-gray-300">
                      Buffering can occur due to your internet connection speed.
                      Try lowering the video quality in the player settings. If
                      that doesn&lsquo;t help, try switching to a different server
                      using the server selection option.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-blue-500 mb-2">
                      What video qualities are available?
                    </h3>
                    <p className="text-gray-300">
                      We offer multiple quality options ranging from 360p to
                      1080p. You can select the quality that works best for your
                      internet connection speed from the player settings.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-blue-500 mb-2">
                      Can I download episodes to watch offline?
                    </h3>
                    <p className="text-gray-300">
                      Yes, most videos have a download option. Look for the
                      download button in the video player. Please note that
                      download speeds depend on your internet connection and the
                      server load.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-blue-500 mb-2">
                      Why am I seeing too many ads?
                    </h3>
                    <p className="text-gray-300">
                      AnimeGrabber has minimal advertising compared to other
                      free anime sites. We only use ads to cover our server
                      costs. If you&lsquo;re experiencing excessive ads, it might be
                      due to browser extensions or other software on your
                      device.
                    </p>
                  </div>
                </div>
              </div>

              {/* Account Questions */}
              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  Account Questions
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-blue-500 mb-2">
                      How do I create an account?
                    </h3>
                    <p className="text-gray-300">
                      Click on the &lsquo;Sign Up&lsquo; button in the top right corner of
                      the site. You&lsquo;ll need to provide a username, email
                      address, and password. Alternatively, you can use social
                      login options if you prefer.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-blue-500 mb-2">
                      I forgot my password. How do I reset it?
                    </h3>
                    <p className="text-gray-300">
                      Click on the &lsquo;Login&lsquo; button, then select &lsquo;Forgot
                      Password&lsquo;. Enter the email address associated with your
                      account, and we&lsquo;ll send you instructions to reset your
                      password.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-blue-500 mb-2">
                      Can I sync my watch history across devices?
                    </h3>
                    <p className="text-gray-300">
                      Yes, if you&lsquo;re logged into your AnimeGrabber account, your
                      watch history, bookmarks, and preferences will sync across
                      all your devices automatically.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-blue-500 mb-2">
                      How do I delete my account?
                    </h3>
                    <p className="text-gray-300">
                      To delete your account, go to your Account Settings and
                      select the &lsquo;Delete Account&lsquo; option at the bottom of the
                      page. Please note that this action is irreversible and
                      will delete all your data including watch history and
                      bookmarks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-gray-300 mb-4">
                  If you couldn&lsquo;t find an answer to your question, please don&lsquo;t
                  hesitate to reach out to us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center"
                  >
                    Contact Support
                  </a>
                  <a
                    href="#"
                    className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center"
                  >
                    Join Our Discord
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
