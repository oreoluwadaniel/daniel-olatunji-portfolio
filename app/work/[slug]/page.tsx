import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProjects } from "@/lib/portfolio-data";

const siteUrl = "https://daniel-olatunji-portfolio.vercel.app";

const repoOverrides: Record<string, string> = {
  "stock-risk-monitoring": "https://github.com/oreoluwadaniel/stock-performance-risk-monitoring",
  "stratavax-logistics": "https://github.com/oreoluwadaniel/stratavax-logistics-analytics",
};

const resultOverrides: Record<string, string[]> = {
  "bloomcrest-revenue-intelligence": [
    "Modeled revenue reached NGN 7.353B, with 43.6% from DTC and 56.4% from wholesale.",
    "Closed deals produced a 48.6% win rate, and won deals averaged about 41.5 days from creation to close.",
    "Open pipeline stood at NGN 129.44M, with NGN 55.09M as stage-weighted pipeline value.",
    "6,129 of 18,000 customers had no successful order in the previous 90 days as of July 20, 2026.",
    "RFM identified 3,884 customers in the At risk and Can't lose segments, representing about NGN 819M in historical successful-order revenue.",
    "The logistic-regression lead-scoring model returned a five-fold ROC-AUC of 0.42, so it was not treated as a production decision model.",
  ],
  "weatherintel": [
    "XGBoost recorded the lowest MAE at 2.218°C, compared with 2.331°C for Persistence and 2.250°C for Linear Regression.",
    "XGBoost RMSE was 2.804°C, compared with 2.973°C for Persistence, 2.811°C for Linear Regression and 4.814°C for Climatology.",
    "371,482 station-days survived the published quality pipeline across 8 stations and 4 continents.",
  ],
  "stock-risk-monitoring": [
    "Cumulative adjusted-price performance ranged from +94.2% for CVX to +675.5% for AAPL.",
    "Maximum drawdown ranged from -23.8% for PG to -61.4% for UNH.",
    "XOM-CVX had a 0.843 return correlation, while AAPL-MSFT was 0.669.",
    "All 10 securities had latest 30-day annualized volatility above their own historical median in the published snapshot.",
    "Average ARIMA MAPE was 5.732% versus 5.716% for the naive baseline, with average skill of -0.33%. ARIMA did not demonstrate a forecasting advantage.",
  ],
  "stratavax-logistics": [
    "749 of 3,000 orders were flagged as Delayed, just under 25%.",
    "The delay analysis found delivery dates preceding order dates in a large share of records, so duration KPIs were rebuilt from delivery_time_hours.",
    "The name Sadiq Ahmed appears 549 times across distinct driver IDs; driver analysis was corrected to group by driver_id.",
    "The profitability analysis found payment fan-out, so payments were aggregated to one row per order before joining and profitability was scoped to Delivered orders.",
    "After correction, revenue, cost and profit reconcile, and the risk and loss-making-delivery outputs use the corrected logic.",
  ],
};

const evidenceImages: Record<string, { src: string; alt: string }> = {
  "everdale-retail-analytics": {
    src: "https://raw.githubusercontent.com/oreoluwadaniel/everdale-retail-analytics/main/docs/everdale.png",
    alt: "Everdale Retail Analytics dashboard from the project repository",
  },
  weatherintel: {
    src: "https://raw.githubusercontent.com/oreoluwadaniel/weatherintel-global-weather-analytics/main/weather%20intel%20dash.png",
    alt: "WeatherIntel Power BI dashboard from the project repository",
  },
  "stock-risk-monitoring": {
    src: "https://raw.githubusercontent.com/oreoluwadaniel/stock-performance-risk-monitoring/main/dashboard/stock%20png.png",
    alt: "Stock performance and risk dashboard from the project repository",
  },
  "bloomcrest-revenue-intelligence": {
    src: "https://raw.githubusercontent.com/oreoluwadaniel/bloomcrest-revenue-intelligence/main/diagrams/bloomcrest_system_architecture_layers.png",
    alt: "Bloomcrest revenue intelligence architecture from the project repository",
  },
};

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
  const repo = repoOverrides[p.slug] ?? p.github;
  const hasRepo = Boolean(repo) && repo !== "https://github.com/oreoluwadaniel";
  const findings = resultOverrides[p.slug] ?? p.findings;
  const evidence = evidenceImages[p.slug];
  const schema = {"@context":"https://schema.org","@type":"CreativeWork",name:p.title,abstract:p.short,url:`${siteUrl}/work/${p.slug}`,author:{"@type":"Person",name:"Daniel Olatunji",url:siteUrl},about:p.category,keywords:p.tools.join(", ")};

  return <main><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
    <section className="case-hero"><div className="container"><Link className="backlink" href="/work">← All projects</Link><div className="case-hero-grid"><div><div className="eyebrow">{p.category}</div><h1>{p.title}</h1><p className="lead">{p.short}</p><div className="notice">{p.status}</div><div className="actions">{hasRepo ? <a className="btn btn-primary" href={repo} target="_blank" rel="noreferrer">Open the repository</a> : <span className="btn btn-secondary" aria-disabled="true">Repository not published</span>}<Link className="btn btn-secondary" href="/contact">Talk to me about this</Link></div></div><div><figure className="case-cover"><img src={p.cover} alt={`${p.title}: visual summary`} width="1600" height="900" fetchPriority="high" /></figure><p className="caption">Visual summary of the project.</p></div></div></div></section>
    <section className="container snapshot"><div className="card"><span className="small">Scale</span><strong>{p.scale}</strong></div><div className="card"><span className="small">Data basis</span><strong>{p.status}</strong></div><div className="card"><span className="small">Main tools</span><strong>{p.tools.slice(0,3).join(" · ")}</strong></div><div className="card"><span className="small">Project area</span><strong>{p.category.split(" · ")[0]}</strong></div></section>
    <section className="case-section"><div className="container copy"><div className="eyebrow">01 · Business context</div><h2>Business context</h2><p>{p.context}</p></div></section>
    <section className="case-section"><div className="container copy"><div className="eyebrow">02 · Problem and objective</div><h2>What needed fixing, and what the work had to achieve</h2><p><strong>Problem:</strong> {p.problem}</p><p><strong>Objective:</strong> {p.objective}</p></div></section>
    <section className="case-section"><div className="container"><div className="eyebrow">03 · Data and method</div><h2>Data and method</h2><div className="two-col" style={{marginTop:28}}><div><h3>Data</h3><ul className="case-list">{p.data.map(x=><li key={x}>{x}</li>)}</ul></div><div><h3>Questions</h3><ul className="case-list">{p.questions.map(x=><li key={x}>{x}</li>)}</ul></div></div><ol className="case-list numbered" style={{marginTop:30}}>{p.work.map(x=><li key={x}>{x}</li>)}</ol><div className="workflow">{p.workflow.map(x=><div key={x}>{x}</div>)}</div></div></section>
    <section className="case-section"><div className="container"><div className="eyebrow">04 · Results</div><h2>What the analysis showed</h2><div className="finding-grid">{findings.map((x,i)=><div className="card finding" key={x}><span className="fnum">{String(i+1).padStart(2,"0")}</span><p>{x}</p></div>)}</div></div></section>
    {evidence && <section className="case-section evidence-section"><div className="container"><div className="eyebrow">Project evidence</div><h2>Evidence from the repository</h2><figure className="evidence-frame"><img src={evidence.src} alt={evidence.alt} loading="lazy" /></figure></div></section>}
    <section className="case-section"><div className="container copy"><div className="eyebrow">05 · What the result shows</div><h2>What the result tells us</h2><p className="big-copy">{p.meaning}</p></div></section>
    <section className="case-section"><div className="container"><div className="eyebrow">06 · Next decisions</div><h2>What I would do with the result</h2><ul className="case-list">{p.recommendations.map(x=><li key={x}>{x}</li>)}</ul></div></section>
    <section className="case-section"><div className="container copy"><div className="eyebrow">07 · The judgement call</div><h2>The decision that was mine to make</h2><blockquote className="pull">{p.judgement}</blockquote></div></section>
    <section className="case-section"><div className="container"><div className="eyebrow">08 · Limits and tools</div><h2>What this work does not claim</h2><ul className="case-list">{p.limitations.map(x=><li key={x}>{x}</li>)}</ul><div className="tag-list" style={{marginTop:28}}>{p.tools.map(t=><span className="tag" key={t}>{t}</span>)}</div></div></section>
    <section className="section-tight"><div className="container contact-box"><div><div className="eyebrow">Review the evidence</div><h2>{hasRepo ? "The code is open. Go and read it." : "The project evidence is documented here."}</h2><p>{hasRepo ? "Queries, transformation logic, validation rules and documentation sit in the linked repository." : "This project is documented here because a public repository is not currently linked."}</p>{hasRepo ? <a className="btn btn-primary" href={repo} target="_blank" rel="noreferrer">Open the repository</a> : <span className="btn btn-secondary" aria-disabled="true">Repository not published</span>}</div><div><div className="eyebrow">Next project</div><h3 style={{marginTop:8}}>{next.title}</h3><p className="small">{next.short}</p><Link className="btn btn-secondary" href={`/work/${next.slug}`}>Read it →</Link></div></div></section>
  </main>;
}
