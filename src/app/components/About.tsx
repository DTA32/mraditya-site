import Image from "next/image";
import about from "../data/about.json";
import TechStackPill from "./TechStackPill";

export default function About() {
    return (
        <section
            className="min-h-[90vh] bg-slate-900 flex flex-col md:flex-row items-center justify-center px-8 md:px-16 xl:px-32 gap-12 lg:gap-20 py-8"
            id="about"
        >
            <Image
                src="/meh.jpg"
                alt="meh"
                width={480}
                height={480}
                className="w-1/2 sm:w-1/3 lg:w-auto max-w-[400px]"
            />
            <div className="flex flex-col gap-4 w-full text-neutral-100">
                <h1 className="text-3xl md:text-4xl">About Me</h1>
                <div className="text-md sm:text-lg md:text-xl flex flex-col gap-8">
                    <p>
                        Hi, as said before, my name is MRaditya. I&apos;m an Backend Engineer Intern at 99.co while also
                        studying at BINUS University, majoring in Computer Science. Interested in web development{" "}
                        <small>(for now)</small>, but also have learned about database, desktop app development, and
                        UI/UX design.
                    </p>
                    <div className="flex flex-col gap-2">
                        <p>Tech Stack</p>
                        <div className="flex flex-wrap gap-2 text-base">
                            {about.map((tech, index) => (
                                <TechStackPill key={index} data={tech} type={2} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
