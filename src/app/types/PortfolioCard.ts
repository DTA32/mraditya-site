import {TechStack} from "@/app/types/TechStack";

export interface PortfolioCardProps {
    id: string;
    title: string;
    image: string;
    description: string;
    techStack: TechStack[];
}
