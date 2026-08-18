import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const baseUrl = "https://daniel-olatunji-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/work", "/experience", "/services", "/contact", ...projects.map((p) => `/work/${p.slug}`)];
  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "monthly" : "yearly",
    priority: path === "" ? 1 : path.startsWith("/work/") ? 0.9 : 0.7,
  }));
}