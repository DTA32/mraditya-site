import About from "./About";
import type { Metadata } from "next";
import { getAboutPageSchema } from "./schema";
import SchemaScript from "@/components/SchemaScript";

export const metadata: Metadata = {
  title: "About - MRaditya Portfolio Site",
  description: "Learn more about me on my portfolio site!",
  openGraph: {
    url: "https://mraditya.my.id/about",
  },
  alternates: {
    canonical: "https://mraditya.my.id/about",
  },
};

export default function Page() {
  const schema = getAboutPageSchema();
  return (
    <>
      <About />
      <SchemaScript schema={schema} />
    </>
  );
}
