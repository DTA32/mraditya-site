import { getPersonSchema } from "@/app/schema/Person";
import { PortfolioModalProps } from "@/types/PortfolioModal";
import { WebApplication, WithContext } from "schema-dts";

const generateProjectSchema = (
  data: PortfolioModalProps,
): WithContext<WebApplication> => {
  const author = getPersonSchema();
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: data.title,
    headline: data.title,
    description: data.description,
    applicationCategory: "Web Application",
    url: `https://mraditya.my.id/portfolio/${data.id}`,
    image:
      data.image.length > 0
        ? `https://assets.mraditya.my.id/portfolio/${data.id}/${data.image[0]}`
        : undefined,
    keywords: data.techStack.map((tech) => tech.name).join(", "),
    sameAs: [
      data.publicLink ? data.publicLink : "",
      data.githubLink ? data.githubLink : "",
      data.videoLink ? data.videoLink : "",
    ].filter(Boolean),
    operatingSystem: "Web Browser",
    author: author,
    potentialAction: {
      "@type": "UseAction",
      target: data.publicLink
        ? data.publicLink
        : data.githubLink
          ? data.githubLink
          : data.videoLink
            ? data.videoLink
            : "",
      name: "View Application",
    },
  };
};

export { generateProjectSchema };
