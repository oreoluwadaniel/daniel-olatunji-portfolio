import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProjects } from "@/lib/portfolio-data";
import { caseStudyEvidence } from "@/lib/case-evidence";
import EvidenceGallery from "@/components/EvidenceGallery";

const siteUrl = "https://daniel-olatunji-portfolio.vercel.app";

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = allProjects.find((x) => x.slug === slug);
  if (!p) return { title: "Project not found" };
  return {
    title: p.title,
    description: p.short,
    alternates: { canonical: `${siteUrl}/work/${p.slug}` },
    openGraph: {
      title: `${p.title} | Daniel Olatunji`,
      description: p.short,
      url: `${siteUrl}/work/${p.slug}`,
      images: [{ url: p.cover, width: 1600, height: 900, alt: p.title }],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = allProjects.find((x) => x.slug === slug);
  if (!p) notFound();
  const index = allProjects.findIndex((x) => x.slug === slug);
  const next = allProjects[(index + 1) % allProjects.length];
  const evidence = caseStudyEvidence[p.slug];
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.title,
    abstract: p.short,
    url: `${siteUrl}/work/${p.slug}`,
    author: { "@type": "Person", name: "Daniel Olatunji", url: siteUrl },
    about: p.category,
    keywords: p.tools.join(", "),
  };

  return <main><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <section className="case-hero"><div className="container"><Link className="backlink" href="/work">← All projects</Link><div className="case-hero-grid"><div><div className="eyebrow">{p.category}</div><h1>{p.title}</h1><p className="lead">{p.short}</p><div className="small" style={{marginBottom:16}}>{p.status}</div><div className="actions">{p.github && <a className="btn btn-primary" href={p.github} target="_blank" rel="noreferrer">View code on GitHub</a>}<Link className={p.github ? "btn btn-secondary" : "btn btn-primary"} href="/contact">Discuss this project</Link></div></div><div><figure className="case-cover"><img src={p.cover} alt={p.title} width="1600" height="900" fetchPriority="high" /></figure></div></div></div></section>
    <section className="container snapshot"><div className="card"><span className="small">Scope</span><strong>{p.scale}</strong></div><div className="card"><span className="small">Tools</span><strong>{p.tools.slice(0,4).join(" · ")}</strong></div><div className="card"><span className="small">Area</span><strong>{p.category}</strong></div></section>
    <section className="case-section"><div className="container copy"><div className="eyebrow">01 · Business problem</div><h2>The problem</h2><p>{p.problem}</p></div></section>
    <section className="case-section"><div className="container"><div className="eyebrow">02 · Questions</div><h2>What the analysis had to answer</h2><ul className="case-list">{p.questions.map(x=><li key={x}>{x}</li>)}</ul></div></section>
    <section className="case-section"><div className="container"><div className="eyebrow">03 · Data and approach</div><h2>Data and approach</h2><div className="two-col" style={{marginTop:28}}><div><h3>Data</h3><ul className="case-list">{p.data.map(x=><li key={x}>{x}</li>)}</ul></div><div><h3>How I worked</h3><ol className="case-list numbered">{p.approach.map(x=><li key={x}>{x}</li>)}</ol></div></div></div></section>
    <section className="case-section"><div className="container"><div className="eyebrow">04 · Findings</div><h2>Key findings</h2><div className="finding-grid">{p.findings.map((x,i)=><div className="card finding" key={x}><span className="fnum">{String(i+1).padStart(2,"0")}</span><p>{x}</p></div>)}</div></div></section>
    {evidence && evidence.length > 0 && <section className="case-section evidence-section"><div className="container"><div className="eyebrow">Evidence</div><h2>From the finished report</h2><p className="evidence-note">Select an image to enlarge it.</p><EvidenceGallery items={evidence} /></div></section>}
    <section className="case-section"><div className="container copy"><div className="eyebrow">05 · Business implications</div><h2>Why it matters</h2><p>{p.implications}</p></div></section>
    <section className="case-section"><div className="container"><div className="eyebrow">06 · Recommendations</div><h2>What I recommend</h2><ul className="case-list">{p.recommendations.map(x=><li key={x}>{x}</li>)}</ul></div></section>
    <section className="case-section"><div className="container copy"><div className="eyebrow">07 · Impact</div><h2>Expected or measured impact</h2><p>{p.impact}</p></div></section>
    <section className="case-section"><div className="container"><div className="eyebrow">08 · Limits</div><h2>What to keep in mind</h2><ul className="case-list">{p.limits.map(x=><li key={x}>{x}</li>)}</ul><details className="tech-doc" style={{marginTop:28}}><summary><strong>Technical documentation</strong></summary><ul className="case-list" style={{marginTop:16}}>{p.technical.map(x=><li key={x}>{x}</li>)}</ul></details></div></section>
    <section className="section-tight"><div className="container contact-box"><div><div className="eyebrow">Next project</div><h2 style={{marginTop:8}}>{next.title}</h2><p>{next.short}</p><Link className="btn btn-primary" href={`/work/${next.slug}`}>View case study →</Link></div><div><div className="eyebrow">Work with me</div><h3 style={{marginTop:8}}>Have a number nobody can explain?</h3><p className="small">Tell me what the report says and what you suspect it is hiding.</p><Link className="btn btn-secondary" href="/contact">Get in touch</Link></div></div></section>
  </main>;
}
