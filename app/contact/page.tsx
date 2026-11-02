import Link from "next/link";

export const metadata = {
  title: "Contact - AnimeGrabber",
  description: "Contact information and help for AnimeGrabber.",
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12 min-h-screen max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <p className="text-gray-300 mb-5">For business inquiries, email <a href="mailto:business@animegrabber.com" className="text-blue-300 hover:text-blue-200">business@animegrabber.com</a>.</p>
      <p className="text-gray-300 mb-5">For copyright notices, see the <Link href="/dmca" className="text-blue-300 hover:text-blue-200">DMCA page</Link>.</p>
      <p className="text-gray-300">For common questions about the catalog and streaming links, read the <Link href="/faq" className="text-blue-300 hover:text-blue-200">FAQ</Link>.</p>
    </main>
  );
}
