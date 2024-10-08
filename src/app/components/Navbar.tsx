"use client";
import { useState } from "react";
import Spotify from "./Spotify";

export default function Navbar() {
    const [hamburger, setHamburger] = useState(false);
    return (
        <nav className="flex flex-col h-[8vh] sticky top-0 z-10">
            <div className="flex flex-row justify-between px-8 items-center gap-x-20 bg-slate-950 h-full">
                <div className="flex flex-row gap-x-0 md:gap-x-20 text-neutral-100 items-center w-full md:w-fit justify-between md:justify-normal">
                    <div className="flex md:hidden">
                        <button aria-label="Dropdown" className="relative" onClick={() => setHamburger(!hamburger)}>
                            <div
                                className={`relative flex overflow-hidden items-center justify-center rounded w-[36px] h-[36px] transform transition-all ring-gray-300 ${
                                    hamburger ? "ring-2" : "ring-0"
                                } ring-opacity-30 duration-200 shadow-md`}
                            >
                                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                                    <div
                                        className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                                            hamburger ? "rotate-[42deg]" : "rotate-0"
                                        }`}
                                    ></div>
                                    <div
                                        className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${
                                            hamburger ? "-translate-x-10" : "translate-x-0"
                                        }`}
                                    ></div>
                                    <div
                                        className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                                            hamburger ? "-rotate-[42deg]" : "rotate-0"
                                        }`}
                                    ></div>
                                </div>
                            </div>
                        </button>
                    </div>
                    <a
                        href="#home"
                        className="text-3xl select-none grow md:grow-0 text-center md:text-left pe-[50px] md:pe-0"
                        onClick={() => setHamburger(false)}
                    >
                        MR
                    </a>
                    <div className="md:flex flex-row gap-x-10 text-xl hidden">
                        <a href="#home" className="linkHover">
                            Home
                        </a>
                        <a href="#about" className="linkHover">
                            About
                        </a>
                        <a href="#portfolio" className="linkHover">
                            Portfolio
                        </a>
                        <a href="#contact" className="linkHover">
                            Contact
                        </a>
                    </div>
                </div>
                <Spotify />
            </div>
            {hamburger && (
                <div className="absolute md:hidden top-full transition-transform left-0 w-full h-screen text-neutral-100 animate-[scrollToBottom_1s] z-[-5]">
                    <div className="flex flex-col text-2xl divide-y divide-slate-500 bg-slate-600 z-[-5] text-center">
                        <a href="#home" className="w-full py-4" onClick={() => setHamburger(false)}>
                            Home
                        </a>
                        <a href="#about" className="w-full py-4" onClick={() => setHamburger(false)}>
                            About
                        </a>
                        <a href="#portfolio" className="w-full py-4" onClick={() => setHamburger(false)}>
                            Portfolio
                        </a>
                        <a href="#contact" className="w-full py-4" onClick={() => setHamburger(false)}>
                            Contact
                        </a>
                    </div>
                    <div
                        className="top-0 w-full h-full z-[5] backdrop-blur-sm"
                        onClick={() => setHamburger(false)}
                    ></div>
                </div>
            )}
        </nav>
    );
}
