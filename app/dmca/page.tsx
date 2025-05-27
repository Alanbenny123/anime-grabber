import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "DMCA Policy - AnimeGrabber",
  description:
    "Learn about our DMCA policy and how to submit a copyright infringement notice.",
};

export default function DMCAPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0f0f0f] py-8 pt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">DMCA Policy</h1>

          <div className="bg-[#171717] rounded-lg p-6 md:p-8 mb-8">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-xl font-semibold mb-4">
                Digital Millennium Copyright Act (DMCA) Notice
              </h2>
              <p className="mb-4">
                AnimeGrabber respects the intellectual property rights of others
                and expects its users to do the same. In accordance with the
                Digital Millennium Copyright Act of 1998 (&lsquo;DMCA&lsquo;), we will
                respond expeditiously to claims of copyright infringement that
                are reported to our designated copyright agent.
              </p>

              <h2 className="text-xl font-semibold mb-4 mt-8">Our Position</h2>
              <p className="mb-4">
                AnimeGrabber is a platform that provides links to third-party
                content. We do not host, upload, or store any videos, media
                files, or content on our servers. All content accessible through
                our service is hosted by third-party providers.
              </p>
              <p className="mb-4">
                We function as a search engine that helps users find anime
                content available on the internet. As a platform that only
                provides links and does not host any content, we comply with the
                DMCA by removing links to allegedly infringing content when
                properly notified.
              </p>

              <h2 className="text-xl font-semibold mb-4 mt-8">
                Notification of Copyright Infringement
              </h2>
              <p className="mb-4">
                If you believe that content available on or through our site
                infringes one or more of your copyrights, please immediately
                notify our designated copyright agent by submitting a written
                DMCA notice. Your notice must include the following information:
              </p>
              <ol className="list-decimal list-inside mb-4 ml-4 space-y-2">
                <li>
                  A physical or electronic signature of a person authorized to
                  act on behalf of the owner of the exclusive right that is
                  allegedly infringed.
                </li>
                <li>
                  Identification of the copyrighted work claimed to have been
                  infringed, or, if multiple copyrighted works are covered by a
                  single notification, a representative list of such works.
                </li>
                <li>
                  Identification of the material that is claimed to be
                  infringing or to be the subject of infringing activity and
                  that is to be removed or access to which is to be disabled,
                  and information reasonably sufficient to permit us to locate
                  the material.
                </li>
                <li>
                  Information reasonably sufficient to permit us to contact the
                  complaining party, such as an address, telephone number, and,
                  if available, an email address at which the complaining party
                  may be contacted.
                </li>
                <li>
                  A statement that the complaining party has a good faith belief
                  that use of the material in the manner complained of is not
                  authorized by the copyright owner, its agent, or the law.
                </li>
                <li>
                  A statement that the information in the notification is
                  accurate, and, under penalty of perjury, that the complaining
                  party is authorized to act on behalf of the owner of an
                  exclusive right that is allegedly infringed.
                </li>
              </ol>

              <h2 className="text-xl font-semibold mb-4 mt-8">
                Submit Your DMCA Notice
              </h2>
              <p className="mb-4">
                Please send your DMCA notice to our designated copyright agent
                at:
              </p>
              <p className="mb-4">
                Email:{" "}
                <a
                  href="mailto:dmca@animegrabber.to"
                  className="text-blue-500 hover:underline"
                >
                  dmca@animegrabber.to
                </a>
              </p>
              <p className="mb-4">
                Subject Line: DMCA Notice - [Your Name/Company]
              </p>

              <h2 className="text-xl font-semibold mb-4 mt-8">
                Counter Notification
              </h2>
              <p className="mb-4">
                If you believe that your content was removed or access to it was
                disabled by mistake or misidentification, you may submit a
                counter notification to our designated agent. Your counter
                notification must include the following:
              </p>
              <ol className="list-decimal list-inside mb-4 ml-4 space-y-2">
                <li>Your physical or electronic signature.</li>
                <li>
                  An identification of the material that has been removed or to
                  which access has been disabled and the location at which the
                  material appeared before it was removed or access to it was
                  disabled.
                </li>
                <li>
                  A statement under penalty of perjury that you have a good
                  faith belief that the material was removed or disabled as a
                  result of mistake or misidentification of the material to be
                  removed or disabled.
                </li>
                <li>
                  Your name, address, and telephone number, and a statement that
                  you consent to the jurisdiction of the federal district court
                  for the judicial district in which the address is located, or
                  if your address is outside of the United States, for any
                  judicial district in which the service provider may be found,
                  and that you will accept service of process from the person
                  who provided notification of the alleged infringement.
                </li>
              </ol>

              <h2 className="text-xl font-semibold mb-4 mt-8">
                Repeat Infringers
              </h2>
              <p className="mb-4">
                It is our policy in appropriate circumstances to disable and/or
                terminate the accounts of users who are repeat infringers.
              </p>

              <h2 className="text-xl font-semibold mb-4 mt-8">
                Changes to Our DMCA Policy
              </h2>
              <p className="mb-4">
                We reserve the right to modify this DMCA policy at any time. If
                we make material changes to this policy, we will notify you by
                updating the date at the bottom of this page and, where required
                by applicable law, we may provide you with additional notice.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
