"use client";

import Image from "next/image";
import { useEffect, useState, useMemo } from "react";

export default function Home() {
    const roles = useMemo(() => ["Junior Backend Engineer", "Computer Science Student", "Daydreamer", "Melophile"], []);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [roles]);
    // TODO: fix height on mobile
    // TODO: animate pulse on fake loading
    return (
        <section className="h-[80vh] flex justify-center items-center bg-slate-800" id="home">
            <div className="grid-rows-2 md:grid-rows-none grid md:grid-cols-9 items-center w-[1280px] mx-8">
                <div className="md:col-span-6 flex flex-col gap-2 justify-center max-h-[90vh] h-fit text-white pt-8 pb-4">
                    <h2 className="text-2xl sm:text-3xl text-neutral-200">Hello, i&apos;m MRaditya and i&apos;m a</h2>
                    <h1 className="text-4xl sm:text-5xl text-neutral-100">{roles[index]}</h1>
                    <h2 className="text-xl sm:text-2xl text-neutral-300">welcome to my portfolio</h2>
                </div>
                <a
                    href="https://www.google.com/404"
                    className="md:col-span-3 max-h-[90vh] flex flex-col gap-2 justify-center items-center h-fit text-decoration-none py-4"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    <Image
                        src="https://assets.mraditya.my.id/robot.png"
                        alt="robot picture"
                        width={200}
                        height={200}
                        className="peer"
                        loading="eager"
                    />
                    <small className="text-stone-200 invisible peer-hover:visible">&copy; Google 404</small>
                </a>
            </div>
        </section>
    );
}
