import type {MetadataRoute} from "next";
import PortfolioJSON from "@/data/portfolio.json";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://mraditya.my.id";
    const projects = PortfolioJSON.map(project => project.id);
    const projectsUrls = projects.map(id => ({
        url: `${baseUrl}/portfolio/${id}`,
        lastModified: new Date().toISOString(),
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date().toISOString(),
        },
        ...projectsUrls,
    ];
}