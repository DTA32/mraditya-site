import Portfolio from "./Portfolio";
import type { Metadata } from "next";
import { getCollectionPageSchema } from "./schema";
import SchemaScript from "@/components/SchemaScript";

export const metadata: Metadata = {
  title: "Portfolio - MRaditya Portfolio Site",
  description: "Check out my projects and work on my portfolio site!",
  openGraph: {
    url: "https://mraditya.my.id/portfolio",
  },
  alternates: {
    canonical: "https://mraditya.my.id/portfolio",
  },
};

export default function Page() {
  const schema = getCollectionPageSchema();
  return (
    <>
      <Portfolio redirectToPage={true} />
      <SchemaScript schema={schema} />
    </>
  );
}
