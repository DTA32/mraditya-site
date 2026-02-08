import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found - MRaditya Portfolio Site",
  description: "The page you are looking for does not exist.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 flex-1">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        404
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Page Not Found
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
      >
        Return to Home
      </Link>
    </div>
  );
}
