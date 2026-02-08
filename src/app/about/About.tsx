import Image from "next/image";
import about from "@/data/about.json";
import TechStackPill from "@/components/TechStackPill";
import IntroText from "./IntroText";
import Link from "next/link";

export default function About() {
  return (
    <section
      className="min-h-[90vh] bg-slate-900 py-8 flex justify-center align-center"
      id="about"
    >
      <div className="flex flex-col md:flex-row items-center justify-center mx-8 md:mx-16 gap-12 lg:gap-20 max-w-screen-xl">
        <div className="flex flex-col gap-12 w-full">
          <div className="flex flex-col gap-6 w-full">
            <IntroText />
            <div className="flex md:hidden flex-col items-center text-center gap-2">
              <Image
                src="https://assets.mraditya.my.id/meh.jpg"
                alt="meh"
                width={288}
                height={288}
                className="h-48 w-48"
              />
            </div>
            <div className="text-md sm:text-lg flex flex-col gap-8 text-neutral-100 text-justify">
              <p>
                Currently working as Junior Backend Engineer at 99.co, where I
                build and maintain large-scale backend systems and collaborate
                with other teams to deliver scalable and reliable solutions.
                Also was a Backend Intern there&nbsp;
                <small>
                  (detail on&nbsp;
                  <a
                    href="https://www.linkedin.com/in/muhammad--raditya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:underline-offset-4 duration-300 after:content-['_↗']"
                  >
                    LinkedIn
                  </a>
                  ).
                </small>{" "}
                Computer Science Graduate from BINUS University with a strong
                focus on backend development, distributed systems, and web
                technologies. My experience spans backend services, APIs,
                databases, and system design, with exposure to DevOps, cloud
                infrastructure, and microservices architecture. I also enjoy
                exploring other areas such as frontend development, system
                architecture, and UI/UX, which i do by building personal
                projects in my free times. Take a look at my
                <span>
                  <Link
                    href={"/cv"}
                    className="underline underline-offset-2 hover:underline-offset-4 duration-300"
                  >
                    <span className="ps-1">CV</span>
                  </Link>
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2 text-base">
              {about.recent.map((tech, index) => (
                <TechStackPill key={index} data={tech} type={2} />
              ))}
            </div>
            <div className="flex flex-wrap gap-2 text-base">
              {about.old.map((tech, index) => (
                <TechStackPill key={index} data={tech} type={2} size={"xs"} />
              ))}
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center text-center gap-2 text-neutral-100">
          <Image
            src="https://assets.mraditya.my.id/meh.jpg"
            alt="meh"
            width={320}
            height={288}
            className="h-72 w-80 flex-1"
          />
          <small>(yes, that&apos;s me wearing BINUS almamater on ITB 😅)</small>
        </div>
      </div>
    </section>
  );
}
