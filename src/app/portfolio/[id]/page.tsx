import PortfolioJSON from "@/data/portfolio.json";
import { notFound } from "next/navigation";
import { PortfolioModalProps } from "@/types/PortfolioModal";
import PortfolioDetail from "@/app/portfolio/PortfolioDetail";
import { generateProjectSchema } from "./schema";
import SchemaScript from "@/components/SchemaScript";

const allData = PortfolioJSON.main
  .concat(PortfolioJSON.old)
  .concat(PortfolioJSON.showcase);

export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = allData.find((project) => project.id === params.id);
  if (project) {
    const props: PortfolioModalProps = project as PortfolioModalProps;
    const description = props.description
      ? props.description.length > 160
        ? props.description.slice(0, 157) + "..."
        : props.description
      : "No description available";
    const images = props.image.map((img) => ({
      url: `https://assets.mraditya.my.id/portfolio/${props.id}/${img}`,
      alt: props.title,
      width: 800,
      height: 600,
    }));
    return {
      title: `${props.title} - MRaditya Portfolio Site`,
      description: description,
      openGraph: {
        url: `https://mraditya.my.id/portfolio/${props.id}`,
        images: images,
      },
      alternates: {
        canonical: `https://mraditya.my.id/portfolio/${props.id}`,
      },
    };
  }
  return {
    title: "Project Not Found - MRaditya Portfolio Site",
    description: "The project you are looking for does not exist.",
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const project = allData.find((project) => project.id === params.id);
  if (!project) {
    notFound();
  }
  const projectObj: PortfolioModalProps = project as PortfolioModalProps;
  const schema = generateProjectSchema(projectObj);
  return (
    <>
      <PortfolioDetail
        data={projectObj}
        closeFunc={undefined}
        fromModal={false}
      />
      <SchemaScript schema={schema} />
    </>
  );
}
