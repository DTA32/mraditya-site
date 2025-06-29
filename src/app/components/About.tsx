import Image from "next/image";
import about from "../data/about.json";
import TechStackPill from "./TechStackPill";
import IntroText from "@/app/components/IntroText";

export default function About() {
    return (
        <section className="min-h-[90vh] bg-slate-900 py-8 flex justify-center align-center" id="about">
            <div
                className="flex flex-col md:flex-row items-center justify-center mx-8 md:mx-16 gap-12 lg:gap-20 max-w-screen-xl">
                <div className="flex flex-col gap-12 w-full">
                    <div className="flex flex-col gap-6 w-full">
                        <IntroText/>
                        <div className="flex md:hidden flex-col items-center text-center gap-2">
                            <Image
                                src="https://assets.mraditya.my.id/meh.jpg"
                                alt="meh"
                                width={288}
                                height={288}
                                className="h-48 w-48"
                            />
                        </div>
                        <div className="text-md sm:text-lg flex flex-col gap-8 text-neutral-100">
                            <p>
                                Currently working as Junior Backend Engineer at 99.co, also was an Backend Intern
                                there&nbsp;
                                <small>(detail on&nbsp;
                                    <a href="https://www.linkedin.com/in/muhammad--raditya/" target="_blank"
                                       rel="noopener noreferrer" className="underline underline-offset-2">
                                        LinkedIn
                                    </a>
                                    ).
                                </small> Computer Science Graduate <small>(soon)</small>&nbsp;
                                from BINUS University. Right now i&apos;m more into web development 
                                (covering Frontend, Backend, RDBMS), while also have learned about DevOps, Cloud, 
                                and System Architecture. Beside those i&apos;ve also tried a little bit on desktop app
                                development, UI/UX design, and Machine Learning.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <p>Recently used tech stack</p>
                            <div className="flex flex-wrap gap-2 text-base">
                                {about.recent.map((tech, index) => (
                                    <TechStackPill key={index} data={tech} type={2}/>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm">haven&apos;t used for a while</p>
                            <div className="flex flex-wrap gap-2 text-base">
                                {about.old.map((tech, index) => (
                                    <TechStackPill key={index} data={tech} type={2} size={"sm"}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex flex-col items-center text-center gap-2">
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
