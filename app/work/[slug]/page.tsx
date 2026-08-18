import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProjects } from "@/lib/portfolio-data";

const siteUrl = "https://daniel-olatunji-portfolio.vercel.app";

export function generateStaticParams() { return allProjects.map(p => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = allProjects.find(x => x.slug === slug);
  if (!p) return { title: "Project not found" };
  return { title:p.title, description:p.short, alternates:{canonical:`${siteUrl}/work/${p.slug}`}, openGraph:{title:`${p.title} | Daniel Olatunji`,description:p.short,url:`${siteUrl}/work/${p.slug}`,images:[{url:p.cover,width:1600,height:900,alt:p.title}]} };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = allProjects.find(x => x.slug === slug);
  if (!p) notFound();
  const index = allProjects.findIndex(x => x.slug === slug);
  const next = allProjects[(index + 1) % allProjects.length];
  const hasRepo = Boolean(p.github) && p.github !== "https://github.com/oreoluwadaniel";
  const schema = {"@context":"https://schema.org","@type":"CreativeWork",name:p.title,abstract:p.short,url:`${siteUrl}/work/${p.slug}`,author:{"@type":"Person",name:"Daniel Olatunji",url:siteUrl},about:p.category,keywords:p.tools.join(", ")};

  return <main><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <section className="case-hero"><div className="container"><Link className="backlink" href="/work">← All projects</Link><div className="case-hero-grid"><div><div className="eyebrow">{p.category}</div><h1>{p.title}</h1><p className="lead">{p.short}</p><div className="notice">{p.status}</div><div className="actions">{hasRepo ? <a className="btn btn-primary" href={p.github} target="_blank" rel="noreferrer">Open the repository</a> : <span className="btn btn-secondary" aria-disabled="true">Repository not published</span>}<Link className="btn btn-secondary" href="/contact">Talk to me about this</Link></div></div><div><figure className="case-cover"><img src={p.cover} alt={`${p.title}: chart summary of the analysis`} width="1600" height="900" fetchPriority="high" /></figure><p className="caption">Visual summary of the analysis. Full outputs sit in the linked repository when one is published.</p></div></div></div></section>
    <section className="container snapshot"><div className="card"><span className="small">Scale</span><strong>{p.scale}</strong></div><div className="card"><span className="small">Data basis</span><strong>{p.status}</strong></div><div className="card"><span className="small">Main tools</span><strong>{p.tools.slice(0,3).join(" · ")}</strong></div><div className="card"><span className="small">Project area</span><strong>{p.category.split(" · ")[0]}</strong></div></section>
    <section className="case-section"><div className="container copy"><div className="eyebrow">01 · Business context</div><h2>Why this problem matters</h2><p>{p.context}</p></div></section>
    <section className="case-section"><div className="container copy"><div className="eyebrow">02 · Problem and objective</div><h2>What needed fixing, and what the work had to achieve</h2><p><strong>Problem:</strong> {p.problem}</p><p><strong>Objective:</strong> {p.objective}</p></div></section>
    <section className="case-section"><div className="container"><div className="eyebrow">03 · Data and method</div><h2>What I worked with and how I approached it</h2><div className="two-col" style={{marginTop:28}}><div><h3>Data</h3><ul className="case-list">{p.data.map(x=><li key={x}>{x}</li>)}</ul></div><div><h3>Questions</h3><ul className="case-list">{p.questions.map(x=><li key={x}>{x}</li>)}</ul></div></div><ol className="case-list numbered" style={{marginTop:30}}>{p.work.map(x=><li key={x}>{x}</li>)}</ol><div className="workflow">{p.workflow.map(x=><div key={x}>{x}</div>)}</div></div></section>
    <section className="case-section"><div className="container"><div className="eyebrow">04 · Results</div><h2>What the analysis showed</h2><div className="finding-grid">{p.findings.map((x,i)=><div className="card finding" key={x}><span className="fnum">{String(i+1).padStart(2,"0")}</span><p>{x}</p></div>)}</div></div></section>
    <section className="case-section"><div className="container copy"><div className="eyebrow">05 · Business meaning</div><h2>Why the result matters</h2><p className="big-copy">{p.meaning}</p></div></section>
    <section className="case-section"><div className="container"><div className="eyebrow">06 · Next decisions</div><h2>What I would do with the result</h2><ul className="case-list">{p.recommendations.map(x=><li key={x}>{x}</li>)}</ul></div></section>
    <section className="case-section"><div className="container copy"><div className="eyebrow">07 · The judgement call</div><h2>The decision that was mine to make</h2><blockquote className="pull">{p.judgement}</blockquote></div></section>
    <section className="case-section"><div className="container"><div className="eyebrow">08 · Limits and tools</div><h2>What this work does not claim</h2><ul className="case-list">{p.limitations.map(x=><li key={x}>{x}</li>)}</ul><div className="tag-list" style={{marginTop:28}}>{p.tools.map(t=><span className="tag" key={t}>{t}</span>)}</div></div></section>
    <section className="section-tight"><div className="container contact-box"><div><div className="eyebrow">Review the evidence</div><h2>{hasRepo ? "The code is open. Go and read it." : "The project evidence is documented here."}</h2><p>{hasRepo ? "Queries, transformation logic, validation rules and documentation sit in the linked repository." : "This project is documented here because a public repository is not currently linked."}</p>{hasRepo ? <a className="btn btn-primary" href={p.github} target="_blank" rel="noreferrer">Open the repository</a> : <span className="btn btn-secondary" aria-disabled="true">Repository not published</span>}</div><div><div className="eyebrow">Next project</div><h3 style={{marginTop:8}}>{next.title}</h3><p className="small">{next.short}</p><Link className="btn btn-secondary" href={`/work/${next.slug}`}>Read it →</Link></div></div></section>
  </main>;
}
