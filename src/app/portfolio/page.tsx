import Portfolio from "./Portfolio";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Portfolio - MRaditya Portfolio Site",
    description: "Check out my projects and work on my portfolio site!",
    openGraph: {
        url: "https://mraditya.my.id/portfolio",
    },
    alternates: {
        canonical: "https://mraditya.my.id/portfolio",
    }
};

export default function Page() {
    return (
        <Portfolio redirectToPage={true}/>
    );
}
