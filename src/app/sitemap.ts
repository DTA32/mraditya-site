import type { MetadataRoute } from "next";
import PortfolioJSON from "@/data/portfolio.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mraditya.my.id";
  const mainProjects = PortfolioJSON.main.map((project) => project.id);
  const showcaseProjects = PortfolioJSON.showcase.map((project) => project.id);
  const oldProjects = PortfolioJSON.old.map((project) => project.id);
  const projects = [...mainProjects, ...showcaseProjects, ...oldProjects];

  const projectsUrls = projects.map((id) => ({
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
    {
      url: `${baseUrl}/cv`,
      lastModified: new Date().toISOString(),
    },
    ...projectsUrls,
  ];
}
