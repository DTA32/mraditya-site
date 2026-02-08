import type { Person } from "schema-dts";
import about from "@/data/about.json";
import contacts from "@/data/contacts.json";

const getPersonSchema = (): Person => {
  return {
    "@type": "Person",
    name: "Muhammad Raditya",
    url: "https://mraditya.my.id",
  };
};

const getFullPersonSchema = (): Person => {
  const schema: Person = getPersonSchema();
  const techStack = about.recent
    .map((tech) => tech.name)
    .concat(about.old.map((tech) => tech.name))
    .join(", ");
  const contactData = contacts.map((item) => item.link);
  const contact = [...contactData, "https://github.com/mraditya32"];

  const fullObject: Partial<Person> = {
    jobTitle: "Junior Backend Engineer",
    worksFor: {
      "@type": "Organization",
      name: "99.co",
    },
    image: "https://assets.mraditya.my.id/meh.jpg",
    description:
      "I am a Backend Engineer on 99.co with experience in cloud architecture, DevOps, and full-stack development.",
    sameAs: contact,
    knowsAbout: techStack,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "BINUS University",
    },
    email: "contact@mraditya.my.id",
    knowsLanguage: ["English", "Indonesian"],
    nationality: "Indonesian",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Enquiries",
      email: "contact@mraditya.my.id",
    },
  };
  return Object.assign({}, schema, fullObject);
};

export { getPersonSchema, getFullPersonSchema };
