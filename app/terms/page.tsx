import Footer from "../../components/Footer";

export const metadata = {
  title: "Terms of Service - AnimeGrabber",
  description: "Read the terms of service for using the AnimeGrabber website.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] py-8 pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">
          Terms of Service
        </h1>

        <div className="bg-[#171717] rounded-lg p-6 md:p-8 mb-8">
          <div className="prose prose-invert max-w-none">
            <p className="mb-4">
              Welcome to AnimeGrabber. Please read these Terms of Service
              (&lsquo;Terms&lsquo;, &lsquo;Terms of Service&lsquo;) carefully
              before using the AnimeGrabber website.
            </p>

            <p className="mb-4">
              By accessing or using our service, you agree to be bound by these
              Terms. If you disagree with any part of the terms, you may not
              access the service.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">1. Content</h2>
            <p className="mb-4">
              Our service allows you to view anime content that is hosted by
              third-party websites. AnimeGrabber does not host, store, or upload
              any videos, media files, or content on its servers. All content
              accessible through our service is hosted by third-party providers.
            </p>

            <p className="mb-4">
              AnimeGrabber merely provides an interface for users to find and
              access content hosted elsewhere on the internet. We do not claim
              ownership of, nor are we affiliated with the third-party websites
              or content that may be linked through our service.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">
              2. User Accounts
            </h2>
            <p className="mb-4">
              When you create an account with us, you must provide accurate,
              complete, and current information. Failure to do so constitutes a
              breach of the Terms, which may result in immediate termination of
              your account on our service.
            </p>

            <p className="mb-4">
              You are responsible for safeguarding the password that you use to
              access the service and for any activities or actions under your
              password.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">3. User Conduct</h2>
            <p className="mb-4">You agree not to use the service:</p>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>
                In any way that violates any applicable laws or regulations
              </li>
              <li>To harass, abuse, or harm another person</li>
              <li>
                To impersonate or attempt to impersonate another user or person
              </li>
              <li>
                To engage in any automated use of the system, such as using
                scripts to send comments or messages
              </li>
              <li>
                To interfere with, disrupt, or create an undue burden on the
                service or the networks connected to the service
              </li>
            </ul>

            <h2 className="text-xl font-semibold mb-4 mt-8">
              4. Intellectual Property
            </h2>
            <p className="mb-4">
              The service and its original content (excluding content hosted by
              third-party websites), features, and functionality are and will
              remain the exclusive property of AnimeGrabber and its licensors.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">
              5. Links To Other Websites
            </h2>
            <p className="mb-4">
              Our service may contain links to third-party websites or services
              that are not owned or controlled by AnimeGrabber. AnimeGrabber has
              no control over, and assumes no responsibility for, the content,
              privacy policies, or practices of any third party websites or
              services.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">6. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your account immediately, without
              prior notice or liability, for any reason whatsoever, including
              without limitation if you breach the Terms.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">
              7. Limitation of Liability
            </h2>
            <p className="mb-4">
              In no event shall AnimeGrabber, nor its directors, employees,
              partners, agents, suppliers, or affiliates, be liable for any
              indirect, incidental, special, consequential or punitive damages,
              including without limitation, loss of profits, data, use,
              goodwill, or other intangible losses.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">8. Changes</h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. What constitutes a material change will
              be determined at our sole discretion.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">9. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:{" "}
              <a href="mailto:terms@animegrabber.com" className="text-blue-500">
                terms@animegrabber.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
