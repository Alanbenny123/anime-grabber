import Footer from "../../components/Footer";

export const metadata = {
  title: "Contact Us - AnimeGrabber",
  description:
    "Contact the AnimeGrabber team for any questions, feedback, or support.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] py-8 pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-[#171717] rounded-lg p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-300 mb-6">
              We&lsquo;re here to help! If you have any questions, feedback, or
              need assistance, please fill out the form below and we&lsquo;ll
              get back to you as soon as possible.
            </p>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 rounded-md bg-[#2a2a2a] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-md bg-[#2a2a2a] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 rounded-md bg-[#2a2a2a] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="content">Content Request</option>
                  <option value="bug">Report a Bug</option>
                  <option value="feedback">Feedback</option>
                  <option value="business">Business Inquiry</option>
                  <option value="dmca">DMCA Notice</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 rounded-md bg-[#2a2a2a] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-[#171717] rounded-lg p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                Other Ways to Connect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-blue-500 mb-2">
                    Join Our Discord Community
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Get instant support, chat with other anime fans, and stay
                    updated with the latest announcements.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-full bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-3 rounded-md font-medium transition-colors"
                  >
                    Join Discord Server
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-blue-500 mb-2">
                    Follow Us on Social Media
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Stay connected and get the latest updates about new anime
                    releases and site features.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-[#2a2a2a] hover:bg-[#3a3a3a] p-3 rounded-full transition-colors"
                    >
                      <span className="sr-only">Twitter</span>
                      {/* Twitter Icon */}
                    </a>
                    <a
                      href="#"
                      className="bg-[#2a2a2a] hover:bg-[#3a3a3a] p-3 rounded-full transition-colors"
                    >
                      <span className="sr-only">Facebook</span>
                      {/* Facebook Icon */}
                    </a>
                    <a
                      href="#"
                      className="bg-[#2a2a2a] hover:bg-[#3a3a3a] p-3 rounded-full transition-colors"
                    >
                      <span className="sr-only">Instagram</span>
                      {/* Instagram Icon */}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#171717] rounded-lg p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">FAQ</h2>
              <p className="text-gray-300 mb-4">
                Before contacting us, you might want to check our frequently
                asked questions for quick answers to common questions.
              </p>
              <a
                href="/faq"
                className="inline-block text-blue-500 hover:text-blue-400 font-medium"
              >
                View FAQ →
              </a>
            </div>

            <div className="bg-[#171717] rounded-lg p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                Business Inquiries
              </h2>
              <p className="text-gray-300 mb-4">
                For business-related inquiries, partnerships, or advertising
                opportunities, please email us directly at:
              </p>
              <a
                href="mailto:business@animegrabber.com"
                className="text-blue-500 hover:text-blue-400 font-medium"
              >
                business@animegrabber.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
