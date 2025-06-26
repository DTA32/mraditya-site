"use client";
import Spotify from "./Spotify";
import Image from "next/image";
import {useScrollPosition} from "../hooks/useScrollPosition";

export default function Navbar() {
    const {scrollY, activeSection} = useScrollPosition();
    const isScrolled = scrollY > 50;

    return (
        <nav className="flex flex-col h-[8vh] static md:sticky top-0 z-10">
            <div className={`flex flex-row justify-between px-8 items-center h-full transition-all duration-300 ${
                isScrolled
                    ? 'bg-slate-950/50 backdrop-blur-md'
                    : 'bg-slate-900 md:bg-slate-950'
            }`}>
                <div
                    className="flex flex-row gap-x-0 md:gap-x-20 text-neutral-100 items-center w-full md:w-fit justify-center md:justify-normal">
                    <a href="#about">
                        <Image
                            src="https://assets.mraditya.my.id/robot.png"
                            alt="robot picture"
                            width={40}
                            height={40}
                            className="w-10 h-full"
                            loading="eager"
                        />
                    </a>
                    <div className="md:flex flex-row gap-x-10 text-xl hidden">
                        <a
                            href="#about"
                            className={`linkHover ${activeSection === 'about' ? 'active' : ''}`}
                        >
                            About
                        </a>
                        <a
                            href="#portfolio"
                            className={`linkHover ${activeSection === 'portfolio' ? 'active' : ''}`}
                        >
                            Portfolio
                        </a>
                        <a
                            href="#contact"
                            className={`linkHover ${activeSection === 'contact' ? 'active' : ''}`}
                        >
                            Contact
                        </a>
                    </div>
                </div>
                <Spotify/>
            </div>
        </nav>
    );
}