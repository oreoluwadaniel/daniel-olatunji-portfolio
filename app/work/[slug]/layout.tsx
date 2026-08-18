import type { Metadata } from "next";
import { projects } from "@/lib/projects";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project | Daniel Olatunji" };
  return {
    title: `${project.title} | Daniel Olatunji`,
    description: project.short,
    alternates: { canonical: `https://daniel-olatunji-portfolio.vercel.app/work/${project.slug}` },
    openGraph: { title: `${project.title} | Daniel Olatunji`, description: project.short, url: `https://daniel-olatunji-portfolio.vercel.app/work/${project.slug}`, images: [{ url: project.cover, alt: `${project.title} project cover` }] },
  };
}

export default function ProjectLayout({ children }: { children: React.ReactNode }) { return children; }
