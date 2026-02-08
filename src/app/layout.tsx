import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  authors: [{ name: "MRaditya" }],
  keywords: ["portfolio", "web development", "mraditya", "projects"],
  icons: "favicon.ico",
  openGraph: {
    siteName: "MRaditya Portfolio Site",
    images: {
      url: "https://assets.mraditya.my.id/robot.png",
      alt: "MRaditya Portfolio Site",
    },
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-pt-[6vh] scroll-smooth">
      <body className={inter.className + " flex flex-col min-h-screen"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
