import PortfolioJSON from "@/data/portfolio.json";
import {notFound} from "next/navigation";
import {PortfolioModalProps} from "@/types/PortfolioModal";
import PortfolioDetail from "@/app/portfolio/PortfolioDetail";

export async function generateMetadata({ params }: { params: { id: string } }) {
    const project = PortfolioJSON.find(project => project.id === params.id);
    if (project) {
        const props: PortfolioModalProps = project as PortfolioModalProps;
        const description = props.description ? props.description.length > 160 ? props.description.slice(0, 157) + '...' : props.description : "No description available";
        const images = props.image.map(img => ({ url: img, alt: props.title, width: 800, height: 600 }))
        return {
            title: `${props.title} - MRaditya Portfolio Site`,
            description: description,
            openGraph: {
                url: `https://mraditya.my.id/portfolio/${props.id}`,
                images: images,
            },
            alternates: {
                canonical: `https://mraditya.my.id/portfolio/${props.id}`,
            }
        };
    }
    return {
        title: "Project Not Found - MRaditya Portfolio Site",
        description: "The project you are looking for does not exist.",
        openGraph: {
            url: "https://mraditya.my.id/portfolio/not-found",
        },
        alternates: {
            canonical: "https://mraditya.my.id/portfolio/not-found",
        }
    }
}

export default async function Page({ params }: { params: { id: string } }) {
    const project = PortfolioJSON.find(project => project.id === params.id);
    if (!project) {
        notFound()
    }
    const projectObj: PortfolioModalProps = project as PortfolioModalProps;
    return (
        <PortfolioDetail data={projectObj} closeFunc={undefined} fromModal={false}/>
    )
}