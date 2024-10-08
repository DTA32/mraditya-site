"use client";
import PortfolioCard from "./PortfolioCard";
import PortfolioJSON from "../data/portfolio.json";
import { useState } from "react";
import { PortfolioModalProps } from "../types/PortfolioModal";
import PortfolioModal from "./PortfolioModal";
import ContactCard from "./ContactCard";

export default function Portfolio() {
    const [modal, setModal] = useState(false); //
    const [modalData, setModalData] = useState<PortfolioModalProps>({
        id: "",
        title: "",
        status: 0,
        image: [],
        description: "",
        techStack: [],
        githubLink: "",
        publicLink: "",
        videoLink: "",
    });
    function closeModal() {
        setModal(false);
    }
    return (
        <section
            className="min-h-[90vh] h-full bg-slate-800 py-12 text-neutral-100 flex justify-center items-center"
            id="portfolio"
        >
            <div className="max-w-screen-xl flex flex-col gap-12 mx-8">
                <div className="flex w-full justify-center items-center gap-4">
                    <h1 className="text-5xl text-center">Portfolio</h1>
                    <ContactCard
                        icon={"github"}
                        platform={"GitHub"}
                        username={"DTA32"}
                        link={"https://github.com/DTA32"}
                        type={0}
                    />
                </div>
                <div
                    className="flex justify-center flex-wrap gap-x-16 gap-y-8 md:gap-y-12"
                    style={{ height: "-webkit-fill-available" }}
                >
                    {PortfolioJSON.map((portfolio) => (
                        <div
                            key={portfolio.title}
                            onClick={() => {
                                setModalData(portfolio);
                                setModal(true);
                            }}
                            className="flex justify-center cursor-pointer aspect-square max-w-[320px] max-h-[320px]"
                        >
                            <PortfolioCard id={portfolio.id} title={portfolio.title} image={portfolio.image[0]} />
                        </div>
                    ))}
                </div>
            </div>
            {modal && <PortfolioModal data={modalData} closeFunc={closeModal} />}
        </section>
    );
}
