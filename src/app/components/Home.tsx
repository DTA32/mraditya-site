"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
    const [role, setRole] = useState("Backend Engineer Intern");
    useEffect(() => {
        const roles = ["Backend Engineer Intern", "Computer Science Student", "Daydreamer", "Melophile"];
        let i = 0;
        setInterval(() => {
            setRole(roles[i]);
            i = (i + 1) % roles.length;
        }, 3000);
    }, []);
    // TODO: fix height on mobile
    // TODO: animate pulse on fake loading
    return (
        <section
            className="h-[80vh] grid-rows-2 md:grid-rows-none grid md:grid-cols-9 bg-slate-800 items-center"
            id="home"
        >
            <div className="md:col-span-6 flex flex-col gap-2 justify-center px-12 max-h-[90vh] h-fit text-white pt-8 pb-4">
                <h2 className="text-3xl text-neutral-200">Hello, i&apos;m MRaditya and i&apos;m a</h2>
                <h1 className="text-5xl text-neutral-100">{role}</h1>
                <h2 className="text-3xl text-neutral-300">welcome to my portfolio</h2>
            </div>
            <a
                href="https://www.google.com/404"
                className="md:col-span-3 max-h-[90vh] flex flex-col gap-2 justify-center items-center h-fit text-decoration-none py-4"
                rel="noreferrer noopener"
                target="_blank"
            >
                <Image src="/robot.png" alt="robot picture" width={200} height={200} className="peer" loading="eager" />
                <small className="text-stone-200 invisible peer-hover:visible">&copy; Google 404</small>
            </a>
        </section>
    );
}
