import Contact from "./Contact";
import type { Metadata } from "next";
import { getContactPageSchema } from "./schema";
import SchemaScript from "@/components/SchemaScript";

export const metadata: Metadata = {
  title: "Contact - MRaditya Portfolio Site",
  description: "Get in touch with me through my portfolio site!",
  openGraph: {
    url: "https://mraditya.my.id/contact",
  },
  alternates: {
    canonical: "https://mraditya.my.id/contact",
  },
};

export default function Page() {
  const schema = getContactPageSchema();
  return (
    <>
      <Contact />
      <SchemaScript schema={schema} />
    </>
  );
}
