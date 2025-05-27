import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Terms of Service - AnimeGrabber",
  description: "Read the terms of service for using the AnimeGrabber website.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0f0f0f] py-8 pt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Terms of Service
          </h1>

          <div className="bg-[#171717] rounded-lg p-6 md:p-8 mb-8">
            <div className="prose prose-invert max-w-none">
              <p className="mb-4">
                Welcome to AnimeGrabber. Please read these Terms of Service
                (&lsquo;Terms&lsquo;, &lsquo;Terms of Service&lsquo;) carefully before using the
                AnimeGrabber website.
              </p>

              <p className="mb-4">
                By accessing or using our service, you agree to be bound by
                these Terms. If you disagree with any part of the terms, you may
                not access the service.
              </p>

              <h2 className="text-xl font-semibold mb-4 mt-8">1. Content</h2>
              <p className="mb-4">
                Our service allows you to view anime content that is hosted by
                third-party websites. AnimeGrabber does not host, store, or upload
                any videos, media files, or content on its servers. All content
                accessible through our service is hosted by third-party
                providers.
              </p>

              <p className="mb-4">
                AnimeGrabber merely provides an interface for users to find and
                access content hosted elsewhere on the internet. We do not claim
                ownership of, nor are we affiliated with the third-party
                websites or content that may be linked through our service.
              </p>

              <h2 className="text-xl font-semibold mb-4 mt-8">
                2. User Accounts
              </h2>
              <p className="mb-4">
                When you create an account with us, you must provide information
                that is accurate, complete, and current at all times. Failure to
                do so constitutes a breach of the Terms, which may result in
                immediate termination of your account on our service.
              </p>

              <p className="mb-4">
                You are responsible for safeguarding the password that you use
                to access the service and for any activities or actions under
                your password, whether your password is with our service or a
                third-party service.
              </p>

              <h2 className="text-xl font-semibold mb-4 mt-8">
                3. Prohibited Uses
              </h2>
              <p className="mb-4">You agree not to use the service:</p>
              <ul className="list-disc list-inside mb-4 ml-4">
                <li className="mb-2">
                  In any way that violates any applicable national or
                  international law or regulation.
                </li>
                <li className="mb-2">
                  To exploit, harm, or attempt to exploit or harm minors in any
                  way.
                </li>
                <li className="mb-2">
                  To transmit, or procure the sending of, any advertising or
                  promotional material, including &lsquo;spam&lsquo;, chain letters, or
                  similar solicitation.
                </li>
                <li className="mb-2">
                  To impersonate or attempt to impersonate AnimeGrabber, a AnimeGrabber
                  employee, another user, or any other person or entity.
                </li>
                <li className="mb-2">
                  To engage in any other conduct that restricts or inhibits
                  anyone&lsquo;s use or enjoyment of the service, or which, as
                  determined by us, may harm AnimeGrabber or users of the service or
                  expose them to liability.
                </li>
              </ul>

              <h2 className="text-xl font-semibold mb-4 mt-8">
                4. Intellectual Property
              </h2>
              <p className="mb-4">
                The service and its original content (excluding content provided
                by users or third parties), features, and functionality are and
                will remain the exclusive property of AnimeGrabber and its
                licensors. The service is protected by copyright, trademark, and
                other laws of both the United States and foreign countries.
              </p>

              <p className="mb-4">
                Our trademarks and trade dress may not be used in connection
                with any product or service without the prior written consent of
                AnimeGrabber.
              </p>

              <h2 className="text-xl font-semibold mb-4 mt-8">
                5. Copyright Policy
              </h2>
              <p className="mb-4">
                We respect the intellectual property rights of others. If you
                believe that your copyrighted work has been copied in a way that
                constitutes copyright infringement, please follow our Copyright
                Infringement Reporting Procedure outlined in our DMCA Policy.
              </p>

              <h2 className="text-xl font-semibold mb-4 mt-8">
                6. Limitation Of Liability
              </h2>
              <p className="mb-4">
                In no event shall AnimeGrabber, nor its directors, employees,
                partners, agents, suppliers, or affiliates, be liable for any
                indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc list-inside mb-4 ml-4">
                <li className="mb-2">
                  Your access to or use of or inability to access or use the
                  service;
                </li>
                <li className="mb-2">
                  Any conduct or content of any third party on the service;
                </li>
                <li className="mb-2">
                  Any content obtained from the service; and
                </li>
                <li className="mb-2">
                  Unauthorized access, use, or alteration of your transmissions
                  or content, whether based on warranty, contract, tort
                  (including negligence), or any other legal theory, whether or
                  not we have been informed of the possibility of such damage.
                </li>
              </ul>

              <h2 className="text-xl font-semibold mb-4 mt-8">7. Disclaimer</h2>
              <p className="mb-4">
                Your use of the service is at your sole risk. The service is
                provided on an &lsquo;AS IS&lsquo; and &lsquo;AS AVAILABLE&lsquo; basis. The service is
                provided without warranties of any kind, whether express or
                implied, including, but not limited to, implied warranties of
                merchantability, fitness for a particular purpose,
                non-infringement, or course of performance.
              </p>

              <h2 className="text-xl font-semibold mb-4 mt-8">
                8. Governing Law
              </h2>
              <p className="mb-4">
                These Terms shall be governed and construed in accordance with
                the laws of the United States, without regard to its conflict of
                law provisions.
              </p>

              <h2 className="text-xl font-semibold mb-4 mt-8">9. Changes</h2>
              <p className="mb-4">
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. What constitutes a material
                change will be determined at our sole discretion.
              </p>

              <p className="mb-4">
                By continuing to access or use our service after those revisions
                become effective, you agree to be bound by the revised terms. If
                you do not agree to the new terms, please stop using the
                service.
              </p>

              <h2 className="text-xl font-semibold mb-4 mt-8">
                10. Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions about these Terms, please contact us
                at{" "}
                <a href="mailto:legal@animegrabber.to" className="text-blue-500">
                  legal@animegrabber.to
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
