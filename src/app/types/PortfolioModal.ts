import { TechStack } from "./TechStack";

export interface PortfolioModalProps {
    id: string;
    title: string;
    status: number;
    description: string;
    image: string[];
    techStack: TechStack[];
    githubLink: string;
    publicLink?: string;
}
