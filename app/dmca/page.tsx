export const metadata = {
  title: "DMCA Policy - AnimeGrabber",
  description:
    "Learn about our DMCA policy and how to submit a copyright infringement notice.",
};

export default function DMCAPage() {
  return (
      <main className="min-h-screen bg-[#0f0f0f] py-8 pt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">DMCA Policy</h1>

          <div className="bg-[#171717] rounded-lg p-6 md:p-8 mb-8">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-xl font-semibold mb-4">
                Digital Millennium Copyright Act (DMCA) Notice
              </h2>
              <p className="mb-4">
                AnimeGrabber provides anime metadata, trailers, and streaming
                links listed by MyAnimeList. You can report a link or listing
                that you believe raises a copyright concern using the contact
                address below.
              </p>

              <h2 className="text-xl font-semibold mb-4 mt-8">Our Position</h2>
              <p className="mb-4">
                AnimeGrabber does not host full episodes. Trailer playback uses
                YouTube, and streaming links open third-party websites.
              </p>
              <p className="mb-4">
                Reports should identify the specific page or link so it can be
                reviewed.
              </p>

              <h2 className="text-xl font-semibold mb-4 mt-8">
                Notification of Copyright Infringement
              </h2>
              <p className="mb-4">
                If you believe that content available on or through our site
                infringes one or more of your copyrights, please immediately
                contact us by submitting a written
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
                Please send your notice to the contact address
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
                counter notification to the contact address above. Your counter
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

            </div>
          </div>
        </div>
      </main>
  );
}
