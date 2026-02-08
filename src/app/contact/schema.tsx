import { getFullPersonSchema } from "../schema/Person";
import type { Person } from "schema-dts";

const getContactPageSchema = () => {
  const author: Person = getFullPersonSchema();
  if (typeof author === "string") {
    throw new Error("Author schema is not properly defined.");
  }
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Muhammad Raditya",
    description:
      "Get in touch with Muhammad Raditya for collaborations, inquiries, or professional connections.",
    url: "https://mraditya.my.id/contact",
    mainEntity: {
      "@type": author["@type"],
      name: author.name,
      email: author.email,
      sameAs: author.sameAs,
      contactPoint: author.contactPoint,
    },
  };
};

export { getContactPageSchema };
