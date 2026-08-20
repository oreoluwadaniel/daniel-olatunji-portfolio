import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProjects } from "@/lib/portfolio-data";

const siteUrl = "https://daniel-olatunji-portfolio.vercel.app";

const evidenceImages: Record<string, { src: string; alt: string }> = {
  weatherintel: {
    src: "https://raw.githubusercontent.com/oreoluwadaniel/weatherintel-global-weather-analytics/main/weather%20intel%20dash.png",
    alt: "WeatherIntel reporting dashboard from the project repository",
  },
  "bloomcrest-revenue-intelligence": {
    src: "https://raw.githubusercontent.com/oreoluwadaniel/bloomcrest-revenue-intelligence/main/diagrams/bloomcrest_system_architecture_layers.png",
    alt: "How the Bloomcrest data sources connect, from the project repository",
  },
  "ab-testing-experimentation": {
    src: "https://raw.githubusercontent.com/oreoluwadaniel/ab-testing-case-studies/main/smart-onboarding/images/04_adoption_story.png",
    alt: "Setup assistant adoption and retention chart from the project repository",
  },
  "crestline-inventory-decision-support": {
    src: "https://raw.githubusercontent.com/oreoluwadaniel/crestline-inventory-decision-support/main/screenshots/dashboard_kpi_band.png",
    alt: "Crestline inventory dashboard from the project repository",
  },
  "data-analytics-etl": {
    src: "https://raw.githubusercontent.com/oreoluwadaniel/data-analytics-etl-portfolio/main/04-sales-reporting-etl/reports/sales.png",
    alt: "Multi-branch sales reporting dashboard from the project repository",
  },
};

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
  const evidence = evidenceImages[p.slug];
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
    <section className="case-hero"><div className="container"><Link className="backlink" href="/work">← All projects</Link><div className="case-hero-grid"><div><div className="eyebrow">{p.category}</div><h1>{p.title}</h1><p className="lead">{p.short}</p><div className="notice">{p.status}</div><div className="actions"><a className="btn btn-primary" href={p.github} target="_blank" rel="noreferrer">Open the repository</a><Link className="btn btn-secondary" href="/contact">Talk to me about this</Link></div></div><div><figure className="case-cover"><img src={p.cover} alt={`${p.title}: visual summary`} width="1600" height="900" fetchPriority="high" /></figure><p className="caption">Visual summary of the project.</p></div></div></div></section>
    <section className="container snapshot"><div className="card"><span className="small">Size of the work</span><strong>{p.scale}</strong></div><div className="card"><span className="small">Data used</span><strong>{p.status}</strong></div><div className="card"><span className="small">Main tools</span><strong>{p.tools.slice(0,3).join(" · ")}</strong></div><div className="card"><span className="small">Area</span><strong>{p.category.split(" & ")[0]}</strong></div></section>
    <section className="case-section"><div className="container copy"><div className="eyebrow">01 · The situation</div><h2>The situation</h2><p>{p.context}</p></div></section>
    <section className="case-section"><div className="container copy"><div className="eyebrow">02 · The question</div><h2>The question this had to answer</h2><p>{p.problem}</p><p>{p.objective}</p></div></section>
    <section className="case-section"><div className="container"><div className="eyebrow">03 · Data and approach</div><h2>What was analysed, and how</h2><div className="two-col" style={{marginTop:28}}><div><h3>What the data was</h3><ul className="case-list">{p.data.map(x=><li key={x}>{x}</li>)}</ul></div><div><h3>What was asked of it</h3><ul className="case-list">{p.questions.map(x=><li key={x}>{x}</li>)}</ul></div></div><ol className="case-list numbered" style={{marginTop:30}}>{p.work.map(x=><li key={x}>{x}</li>)}</ol><div className="workflow">{p.workflow.map(x=><div key={x}>{x}</div>)}</div></div></section>
    <section className="case-section"><div className="container"><div className="eyebrow">04 · Results</div><h2>What the numbers showed</h2><div className="finding-grid">{p.findings.map((x,i)=><div className="card finding" key={x}><span className="fnum">{String(i+1).padStart(2,"0")}</span><p>{x}</p></div>)}</div></div></section>
    {evidence && <section className="case-section evidence-section"><div className="container"><div className="eyebrow">Evidence</div><h2>From the project itself</h2><figure className="evidence-frame"><img src={evidence.src} alt={evidence.alt} loading="lazy" /></figure></div></section>}
    <section className="case-section"><div className="container copy"><div className="eyebrow">05 · What it means</div><h2>What this means for the business</h2><p className="big-copy">{p.meaning}</p></div></section>
    <section className="case-section"><div className="container"><div className="eyebrow">06 · Actions</div><h2>Recommended actions</h2><ul className="case-list">{p.recommendations.map(x=><li key={x}>{x}</li>)}</ul></div></section>
    <section className="case-section"><div className="container copy"><div className="eyebrow">07 · Confidence</div><h2>Why this result can be trusted</h2><blockquote className="pull">{p.judgement}</blockquote></div></section>
    <section className="case-section"><div className="container"><div className="eyebrow">08 · Tools</div><h2>Tools used</h2><div className="tag-list" style={{marginTop:20}}>{p.tools.map(t=><span className="tag" key={t}>{t}</span>)}</div></div></section>
    <section className="section-tight"><div className="container contact-box"><div><div className="eyebrow">Next project</div><h2 style={{marginTop:8}}>{next.title}</h2><p>{next.short}</p><Link className="btn btn-primary" href={`/work/${next.slug}`}>Read it →</Link></div><div><div className="eyebrow">Work with me</div><h3 style={{marginTop:8}}>Have a number nobody can explain?</h3><p className="small">That is usually where the useful work starts. Tell me what the report says and what you suspect it is hiding.</p><Link className="btn btn-secondary" href="/contact">Get in touch</Link></div></div></section>
  </main>;
}
