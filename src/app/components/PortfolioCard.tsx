import Image from "next/image";
import {PortfolioCardProps} from "../types/PortfolioCard";
import TechStackPill from "@/app/components/TechStackPill";

export default function PortfolioCard(props: PortfolioCardProps) {
    return (
        <div
            className="flex w-full h-full group aspect-square relative hover:scale-105 ease-in-out duration-300 bg-slate-900 rounded-lg">
            <div className="flex group-hover:blur-[2px] group-hover:brightness-50">
                <Image
                    src={`https://assets.mraditya.my.id/portfolio/${props.id}/${props.image}`}
                    alt={`${props.title} preview`}
                    width={160}
                    height={240}
                    className="aspect-square object-cover rounded-l-lg"
                    loading="lazy"
                />
                <div className="px-4 py-8 flex flex-col justify-between gap-y-4">
                    <h3 className="text-lg font-semibold text-neutral-100">{props.title}</h3>
                    <p className="text-sm text-neutral-300 line-clamp-3">{props.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {props.techStack.length > 0 && (
                            <div className="flex flex-col lg:me-6">
                                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                                    {props.techStack.map((tech) => (
                                        <TechStackPill key={tech.name} data={tech} type={1} size={"sm"}/>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex opacity-0 group-hover:opacity-100 absolute inset-0 h-full w-full">
                <div className="my-auto mx-auto text-center py-1 px-2 select-none text-xl flex items-center gap-2">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16 8L21 3M21 3H16M21 3V8M8 8L3 3M3 3L3 8M3 3L8 3M8 16L3 21M3 21H8M3 21L3 16M16 16L21 21M21 21V16M21 21H16"
                            stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>Click to see detail</p>
                </div>
            </div>
        </div>
    );
}
