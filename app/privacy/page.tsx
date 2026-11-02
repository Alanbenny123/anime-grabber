export const metadata = {
  title: "Privacy Policy - AnimeGrabber",
  description:
    "Learn how AnimeGrabber collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] py-8 pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="bg-[#171717] rounded-lg p-6 md:p-8 mb-8">
          <div className="prose prose-invert max-w-none">
            <p className="mb-4">
              At AnimeGrabber, we are committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website.
            </p>

            <p className="mb-4">
              Please read this privacy policy carefully. If you do not agree
              with the terms of this privacy policy, please do not access the
              site.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">
              1. Collection of Your Information
            </h2>
            <p className="mb-4">
              We may collect information about you in a variety of ways. The
              information we may collect via the website includes:
            </p>

            <h3 className="text-lg font-medium mb-3 mt-6">Personal Data</h3>
            <p className="mb-4">
              This version of AnimeGrabber has no account registration,
              newsletter subscription, payment form, or in-app comment form.
            </p>

            <h3 className="text-lg font-medium mb-3 mt-6">Derivative Data</h3>
            <p className="mb-4">
              A request to a deployed website can include technical details such
              as your IP address, browser type, requested page, and access time.
              Logging and retention depend on the hosting configuration.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">
              2. Use of Your Information
            </h2>
            <p className="mb-4">
              Technical request data may be processed to serve pages and operate
              the website. The current app does not maintain user profiles or
              process payments.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">
              3. Disclosure of Your Information
            </h2>
            <p className="mb-4">
              The site retrieves anime metadata from Jikan. A title page may
              embed a YouTube trailer, and an external streaming link opens the
              provider&apos;s site when you select it. Those services have their own
              privacy practices.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">
              4. Security of Your Information
            </h2>
            <p className="mb-4">
              The application source does not include a user account database.
              Transport security and request logging depend on the deployment
              and hosting provider. External services control their own systems.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">5. Contact Us</h2>
            <p className="mb-4">
              If you have questions or comments about this Privacy Policy,
              please contact us at:
            </p>
            <p className="mb-4">
              Email:{" "}
              <a
                href="mailto:privacy@animegrabber.com"
                className="text-blue-500"
              >
                privacy@animegrabber.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
