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
    });
    function closeModal() {
        setModal(false);
    }
    return (
        <section
            className="min-h-[90vh] h-full bg-slate-800 py-12 flex flex-col gap-12 text-neutral-100"
            id="portfolio"
        >
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
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 sm:px-12 gap-x-16 gap-y-8 md:gap-y-12"
                style={{ height: "-webkit-fill-available" }}
            >
                {PortfolioJSON.map((portfolio) => (
                    <div
                        key={portfolio.title}
                        onClick={() => {
                            setModalData(portfolio);
                            setModal(true);
                        }}
                        className="flex justify-center cursor-pointer"
                    >
                        <PortfolioCard id={portfolio.id} title={portfolio.title} image={portfolio.image[0]} />
                    </div>
                ))}
            </div>
            {modal && <PortfolioModal data={modalData} closeFunc={closeModal} />}
        </section>
    );
}
