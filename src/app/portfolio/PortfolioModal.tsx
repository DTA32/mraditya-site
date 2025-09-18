"use client";
import {PortfolioModalProps} from "@/types/PortfolioModal";
import {useEffect} from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import PortfolioDetail from "@/app/portfolio/PortfolioDetail";

export default function PortfolioModal(props: { data: PortfolioModalProps; closeFunc: () => void }) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && props.closeFunc) props.closeFunc();
        };
        document.body.style.overflowY = "hidden";
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflowY = "scroll";
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [props]);

    return (
        <div className="relative w-full h-full z-30">
            <PortfolioDetail data={props.data} closeFunc={props.closeFunc} fromModal={true} />
            <div className="w-full h-full fixed inset-0 z-20 bg-black opacity-80" onClick={props.closeFunc}></div>
        </div>
    );
}
