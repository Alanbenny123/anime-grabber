import Footer from "../../components/Footer";

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
              When you create an account or subscribe to our newsletter, we may
              collect personally identifiable information, such as your:
            </p>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>Email address</li>
              <li>Username</li>
              <li>Password</li>
            </ul>

            <h3 className="text-lg font-medium mb-3 mt-6">Derivative Data</h3>
            <p className="mb-4">
              Information our servers automatically collect when you access the
              website, such as your:
            </p>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Access times</li>
              <li>Pages viewed</li>
            </ul>

            <h2 className="text-xl font-semibold mb-4 mt-8">
              2. Use of Your Information
            </h2>
            <p className="mb-4">
              Having accurate information about you permits us to provide you
              with a smooth, efficient, and customized experience. We may use
              information collected about you via the website to:
            </p>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>Create and manage your account</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments or inquiries</li>
              <li>Prevent fraudulent transactions and monitor against theft</li>
              <li>
                Request feedback and contact you about your use of the website
              </li>
              <li>
                Compile anonymous statistical data for use in improving our
                service
              </li>
            </ul>

            <h2 className="text-xl font-semibold mb-4 mt-8">
              3. Disclosure of Your Information
            </h2>
            <p className="mb-4">
              We may share information we have collected about you in certain
              situations. Your information may be disclosed as follows:
            </p>

            <h3 className="text-lg font-medium mb-3 mt-6">
              By Law or to Protect Rights
            </h3>
            <p className="mb-4">
              If we believe the release of information about you is necessary to
              respond to legal process, to investigate or remedy potential
              violations of our policies, or to protect the rights, property,
              and safety of others, we may share your information as permitted
              or required by any applicable law, rule, or regulation.
            </p>

            <h3 className="text-lg font-medium mb-3 mt-6">
              Third-Party Service Providers
            </h3>
            <p className="mb-4">
              We may share your information with third parties that perform
              services for us or on our behalf, including payment processing,
              data analysis, email delivery, hosting services, customer service,
              and marketing assistance.
            </p>

            <h2 className="text-xl font-semibold mb-4 mt-8">
              4. Security of Your Information
            </h2>
            <p className="mb-4">
              We use administrative, technical, and physical security measures
              to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to
              us, please be aware that despite our efforts, no security measures
              are perfect or impenetrable, and no method of data transmission
              can be guaranteed against any interception or other type of
              misuse.
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
