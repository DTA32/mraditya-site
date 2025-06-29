"use client";
import {PortfolioModalProps} from "../types/PortfolioModal";
import {useEffect} from "react";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark, faLink} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {Navigation, Pagination, Keyboard} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import TechStackPill from "./TechStackPill";

export default function PortfolioModal(props: { data: PortfolioModalProps; closeFunc: () => void }) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") props.closeFunc();
        };
        document.body.style.overflowY = "hidden";
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflowY = "scroll";
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [props]);
    const statusMapper = [
        {text: "Loading...", color: "bg-gray-500"},
        {text: "Planned", color: "bg-yellow-500"},
        {text: "Ongoing", color: "bg-blue-500"},
        {text: "Done", color: "bg-green-500"},
        {text: "Deployed", color: "bg-green-700"},
    ];

    function imageSlideshow(images: string[]) {
        if (images.length === 0) {
            return (
                <div className="flex-1 place-content-center text-center">
                    No images available yet :(
                </div>
            );
        } else if (images.length === 1) {
            return (
                <Image
                    src={`https://assets.mraditya.my.id/portfolio/${props.data.id}/${images[0]}`}
                    alt={props.data.title}
                    width={480}
                    height={480}
                    className="object-contain w-full h-full"
                />
            );
        } else {
            return (
                <Swiper
                    modules={[Navigation, Pagination, Keyboard]}
                    navigation
                    pagination={{clickable: true}}
                    spaceBetween={5}
                    keyboard={{enabled: true}}
                    className="w-full"
                >
                    {images.map((image) => (
                        <SwiperSlide key={image}>
                            <Image
                                src={`https://assets.mraditya.my.id/portfolio/${props.data.id}/${image}`}
                                alt={props.data.title}
                                width={480}
                                height={480}
                                className="object-contain w-full h-full"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )
        }
    }

    return (
        <div className="relative w-full h-full z-30">
            <div
                className="fixed inset-0 my-auto mx-auto z-40 w-11/12 lg:w-3/4 h-5/6 lg:h-3/4 bg-slate-900 rounded-xl flex flex-col lg:flex-row text-white">
                <div className="lg:hidden text-right px-4 py-2">
                    <FontAwesomeIcon
                        icon={faXmark}
                        size="2x"
                        onClick={props.closeFunc}
                        className="cursor-pointer"
                        color="lightgray"
                    />
                </div>
                <div
                    className="bg-neutral-700 rounded-none lg:rounded-l-xl flex place-center h-2/6 md:h-1/2 lg:h-full w-full lg:w-[45%] [&:has(>*):not(:has(>*>*))]:lg:w-[75%]">
                    {imageSlideshow(props.data.image)}
                </div>
                <div className="p-8 gap-10 w-full h-full flex flex-col overflow-y-auto">
                    <div className="flex justify-between">
                        <h3 className="text-4xl">{props.data.title}</h3>
                        <FontAwesomeIcon
                            icon={faXmark}
                            size="2x"
                            onClick={props.closeFunc}
                            className="cursor-pointer opacity-0 lg:opacity-100"
                            color="lightgray"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 w-fit">
                            <div className={`${statusMapper[props.data.status].color} w-4 h-4 rounded-full`}></div>
                            <div>{statusMapper[props.data.status].text}</div>
                        </div>
                        <p className="text-xl lg:me-8 min-h-[120px] lg:min-h-[160px]">{props.data.description}</p>
                    </div>
                    {props.data.techStack.length > 0 && (
                        <div className="flex flex-col lg:me-6">
                            <div className="flex flex-wrap gap-x-4 gap-y-2">
                                {props.data.techStack.map((tech) => (
                                    <TechStackPill key={tech.name} data={tech} type={1}/>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="flex flex-row gap-8 text-lg">
                        {props.data.githubLink && (
                            <a
                                href={props.data.githubLink}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="underline underline-offset-2 hover:underline-offset-4 duration-300 after:content-['_↗']"
                            >
                                <FontAwesomeIcon icon={faGithub}/>
                                <span className="ps-1">Repository</span>
                            </a>
                        )}
                        {props.data.publicLink && (
                            <a
                                href={props.data.publicLink}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="underline underline-offset-2 hover:underline-offset-4 duration-300 after:content-['_↗']"
                            >
                                <FontAwesomeIcon icon={faLink}/>
                                <span className="ps-1">Public Link</span>
                            </a>
                        )}
                        {props.data.videoLink && (
                            <a
                                href={props.data.videoLink}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="underline underline-offset-2 hover:underline-offset-4 duration-300 after:content-['_↗']"
                            >
                                <FontAwesomeIcon icon={faLink}/>
                                <span className="ps-1">Video Link</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div className="w-full h-full fixed inset-0 z-20 bg-black opacity-80" onClick={props.closeFunc}></div>
        </div>
    );
}
