import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "MRaditya Portfolio Site",
    description: "Take a look at my portfolio site!",
    authors: [{ name: "MRaditya" }],
    keywords: ["portfolio", "web development", "mraditya", "projects"],
    icons: "favicon.ico",
    openGraph: {
        title: "MRaditya Portfolio Site",
        description: "Take a look at my portfolio site!",
        siteName: "MRaditya Portfolio Site",
        images: { url: "https://assets.mraditya.my.id/robot.png", alt: "MRaditya Portfolio Site" },
        type: "website",
        url: "https://mraditya.my.id",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-pt-[9.9vh] scroll-smooth">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
