"use client";
import {useEffect, useMemo, useState} from "react";
import '@/app/styles/IntroTextAnimation.css';

export default function IntroText() {
    const roles = useMemo(() => ["Junior Backend Engineer", "Computer Science Student", "Daydreamer", "Melophile", "Professional Procrastinator", "Nostalgic Doomer"], []);
    const [index, setIndex] = useState(0);
    const [animation, setAnimation] = useState('animate-fade-in');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAnimation('animate-fade-out');

            const timeoutId = setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % roles.length);
                setAnimation('animate-fade-in');
            }, 300); // Corresponds to fade-out animation duration

            return () => clearTimeout(timeoutId);
        }, 3000); // Time each role is displayed

        return () => clearInterval(intervalId);
    }, [roles]);

    return (
        <div className="md:col-span-6 flex flex-col gap-2 justify-center max-h-[90vh] h-fit text-white">
            <h1 className="hidden">Hello, i&apos;m Muhammad Raditya and i&apos;m a {roles[0]}</h1>
            <div className="text-2xl sm:text-3xl text-neutral-100 flex flex-col md:flex-row gap-x-2">
                <h2>Hello,</h2>
                <h2>i&apos;m Muhammad Raditya</h2>
            </div>
            <h2 className="text-2xl sm:text-3xl text-neutral-100 min-h-[64px] md:min-h-fit">
                and i&apos;m a&nbsp;
                <span className={`text-neutral-300 ${animation}`}>
                    {roles[index]}
                </span>
            </h2>
        </div>
    );
}