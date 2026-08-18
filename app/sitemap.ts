import type { MetadataRoute } from "next";
import { allProjects } from "@/lib/portfolio-data";

export const dynamic = "force-static";
const siteUrl = "https://daniel-olatunji-portfolio.vercel.app";
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: [string, number][] = [["",1],["/work",0.9],["/about",0.8],["/experience",0.8],["/services",0.7],["/contact",0.6],...allProjects.map(p => [`/work/${p.slug}`,0.9] as [string,number])];
  return pages.map(([path,priority]) => ({url:`${siteUrl}${path}`,lastModified,changeFrequency:path === "" || path === "/work" ? "monthly" : "yearly",priority}));
}
