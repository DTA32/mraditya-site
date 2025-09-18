import About from "@/app/about/About";
import Portfolio from "@/app/portfolio/Portfolio";
import Contact from "@/app/contact/Contact";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "MRaditya Portfolio Site",
    description: "Take a look at my portfolio site!",
    openGraph: {
        url: "https://mraditya.my.id",
    },
    alternates: {
        canonical: "https://mraditya.my.id",
    }
};

export default function Page() {
    return (
        <>
            <main>
                <About />
                <div className="bg-gradient-to-b h-12 from-slate-900 to-slate-800"></div>
                <Portfolio redirectToPage={false} />
                <div className="bg-gradient-to-b h-12 from-slate-800 to-slate-900"></div>
                <Contact />
            </main>
        </>
    );
}
