"use client";
import PortfolioCard from "./PortfolioCard";
import PortfolioJSON from "@/data/portfolio.json";
import {useState} from "react";
import {PortfolioModalProps} from "@/types/PortfolioModal";
import PortfolioModal from "./PortfolioModal";
import ContactCard from "@/components/ContactCard";
import Link from "next/link";

export default function Portfolio({ redirectToPage } : { redirectToPage: boolean}) {
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
    var cards: JSX.Element[]; 
    if (redirectToPage) {
        cards = PortfolioJSON.map((portfolio) => (
            <Link
                key={portfolio.title}
                href={"/portfolio/" + portfolio.id}
                className="flex justify-center cursor-pointer w-full md:w-[calc(50%-2rem)] max-h-[240px]"
            >
                <PortfolioCard id={portfolio.id} title={portfolio.title} image={portfolio.image[0]}
                               description={portfolio.description}
                               techStack={portfolio.techStack.slice(0, 3)}
                               redirectToPage={redirectToPage}/>
            </Link>
        ))
    } else {
        cards = PortfolioJSON.map((portfolio) => (
            <div
                key={portfolio.title}
                onClick={() => {
                    setModalData(portfolio);
                    setModal(true);
                }}
                className="flex justify-center cursor-pointer w-full md:w-[calc(50%-2rem)] max-h-[240px]"
            >
                <PortfolioCard id={portfolio.id} title={portfolio.title} image={portfolio.image[0]}
                               description={portfolio.description}
                               techStack={portfolio.techStack.slice(0, 3)}
                               redirectToPage={redirectToPage}/>
            </div>
        ))
    }

    return (
        <>
            <section
                className="min-h-[90vh] h-full bg-slate-800 py-12 text-neutral-100 flex justify-center items-center"
                id="portfolio"
            >
                <div className="max-w-screen-xl flex flex-col gap-12 mx-8">
                    <div className="flex flex-col gap-2 text-center">
                        <div className="flex w-full justify-center items-center gap-4">
                            <h2 className="text-4xl">Portfolio</h2>
                            <ContactCard
                                icon={"github"}
                                platform={"GitHub"}
                                username={"DTA32"}
                                link={"https://github.com/DTA32"}
                                type={0}
                            />
                        </div>
                        <p>Mostly from uni projects, while few others is my personal project during free time</p>
                    </div>
                    <div
                        className="flex justify-center flex-wrap gap-x-16 gap-y-8 md:gap-y-12"
                        style={{height: "-webkit-fill-available"}}
                    >
                        {cards}
                    </div>
                </div>
            </section>
            {modal && <PortfolioModal data={modalData} closeFunc={closeModal}/>}
        </>
    );
}
