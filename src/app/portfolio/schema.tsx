import portfolio from "@/data/portfolio.json";
import { CollectionPage, ListItem, Person, WithContext } from "schema-dts";
import { getPersonSchema } from "@/app/schema/Person";

const getCollectionPageSchema = (): WithContext<CollectionPage> => {
  const author: Person = getPersonSchema();
  const allProjects = [
    ...portfolio.main,
    ...portfolio.showcase,
    ...portfolio.old,
  ];
  const itemListElements: ListItem[] = allProjects.map((project) => ({
    "@type": "ListItem",
    position: allProjects.indexOf(project) + 1,
    url: `https://mraditya.my.id/portfolio/${project.id}`,
    name: project.title,
    description:
      project.description.length > 160
        ? project.description.slice(0, 157).trim() + "..."
        : project.description,
    image:
      project.image.length > 0
        ? `https://assets.mraditya.my.id/portfolio/${project.id}/${project.image[0]}`
        : "",
  }));

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portfolio of Muhammad Raditya",
    description:
      "A collection of software engineering projects by Muhammad Raditya, featuring various applications developed using different technologies.",
    url: "https://mraditya.my.id/portfolio",
    author: author,
    mainEntity: {
      "@type": "ItemList",
      itemListOrder: "http://schema.org/ItemListOrderAscending",
      numberOfItems: allProjects.length,
      itemListElement: itemListElements,
    },
  };
};

export { getCollectionPageSchema };
