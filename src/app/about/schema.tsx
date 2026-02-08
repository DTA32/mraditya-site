import { AboutPage, WithContext } from "schema-dts";
import { getFullPersonSchema } from "@/app/schema/Person";

const getAboutPageSchema = (): WithContext<AboutPage> => {
  const person = getFullPersonSchema();
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Muhammad Raditya",
    description:
      "Profile of Muhammad Raditya, detailing professional experience as a Junior Backend Engineer at 99.co, education at BINUS University, and technical skills.",
    url: "https://mraditya.my.id/about",
    mainEntity: person,
  };
};

export { getAboutPageSchema };
