import About from "./About";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "About - MRaditya Portfolio Site",
    description: "Learn more about me on my portfolio site!",
    openGraph: {
        url: "https://mraditya.my.id/about",
    },
    alternates: {
        canonical: "https://mraditya.my.id/about",
    }
};

export default function Page() {
    return (
        <About />
    );
}
