import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Projects | Daniel Olatunji",
  description: "Selected data analysis, business intelligence, CRM data and operations case studies by Daniel Olatunji.",
  alternates: { canonical: "https://daniel-olatunji-portfolio.vercel.app/work" },
  openGraph: { title: "Projects | Daniel Olatunji", description: "Selected data analysis, business intelligence, CRM data and operations case studies.", url: "https://daniel-olatunji-portfolio.vercel.app/work", images: ["/og-image.svg"] },
};

export default function WorkPage() {
  return <main>
    <section className="section"><div className="container"><div className="eyebrow">Selected work</div><h1>Projects</h1><p className="lead">Case studies covering revenue, retail, CRM data, data quality, operations, forecasting and automation. Each one explains the problem, the evidence, the decisions and what the work showed.</p><div className="project-grid">{projects.map(p=><article className="card project-card" key={p.slug}><img className="cover" src={p.cover} alt={`${p.title} project cover`} loading="lazy" /><div className="content"><div className="meta">{p.category}</div><h3>{p.title}</h3><p>{p.short}</p><div className="small">{p.scale}</div><div className="tag-list">{p.tools.map(t=><span className="tag" key={t}>{t}</span>)}</div><div className="card-actions"><Link className="btn btn-primary" href={`/work/${p.slug}`}>Read Case Study</Link>{p.github !== "https://github.com/oreoluwadaniel" && <a className="btn btn-secondary" href={p.github} target="_blank" rel="noreferrer">Project GitHub</a>}</div></div></article>)}</div></div></section>
  </main>;
}
