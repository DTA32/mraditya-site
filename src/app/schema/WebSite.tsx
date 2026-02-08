import { getPersonSchema } from "@/app/schema/Person";
import type { WithContext, WebSite } from "schema-dts";

const getWebSiteSchema = (): WithContext<WebSite> => {
  const author = getPersonSchema();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Muhammad Raditya",
    url: "https://mraditya.my.id",
    author: author,
  };
};

export { getWebSiteSchema };
