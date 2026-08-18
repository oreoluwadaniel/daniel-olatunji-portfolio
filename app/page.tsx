import Link from "next/link";
import { projects } from "@/lib/projects";

const featuredSlugs = ["bloomcrest-revenue-intelligence", "everdale-retail-analytics", "kavora-crm-migration", "data-analytics-etl"];
const focus = [
  ["Data Analysis", "I analyse revenue, customer, risk and operational data to explain what changed and what needs attention."],
  ["Business Intelligence", "I build reporting and dashboards that give managers a clear view of performance and the measures behind it."],
  ["Data Quality & ETL", "I check, clean and structure business data before it is used for analysis or reporting."],
  ["Revenue & Customer Analysis", "I examine sales, customer behaviour, retention, pipeline and revenue performance."],
  ["Forecasting & Statistics", "I use statistical analysis and forecasting where they help answer a specific business question."]
];
const services = [
  ["Management Reporting", "Build reporting that shows sales, revenue, customers, costs and operational performance clearly."],
  ["Power BI & Dashboard Development", "Turn prepared business data into dashboards with useful KPIs, trends, comparisons and drill-downs."],
  ["Data Cleaning & Quality", "Find duplicates, missing information, inconsistent records and exceptions before they distort reporting."],
  ["Revenue & Customer Analysis", "Analyse revenue, customer behaviour, retention, pipeline and channel performance."],
  ["Operational Analytics", "Use data to investigate inventory, delivery, workforce, cost and process problems."],
  ["SQL, ETL & Data Preparation", "Prepare reliable analysis-ready datasets from operational and relational data sources."]
];

export default function Home() {
  const featured = featuredSlugs.map(slug => projects.find(p => p.slug === slug)).filter(Boolean);
  return <main>
    <section className="hero"><div className="container hero-grid"><div className="hero-copy">
      <div className="eyebrow">Data Analysis · Business Intelligence</div>
      <h1>Daniel Olatunji</h1>
      <p style={{fontSize:"1.45rem",color:"#f3f1ea"}}>Data Analyst | Business Intelligence Analyst</p>
      <p>I use business data to explain performance, find problems, improve reporting and support better decisions. My work covers revenue, customers, operations, data quality, dashboards and forecasting.</p>
      <div className="actions"><Link className="btn btn-primary" href="/work">View My Work</Link><a className="btn btn-secondary" href="/cv/Daniel_Olatunji_CV.pdf" download>Download CV</a><Link className="btn btn-secondary" href="/contact">Contact Me</Link></div>
    </div><div className="portrait"><img src="/images/IMG_4720.JPG" alt="Daniel Olatunji" width="900" height="1100" fetchPriority="high" decoding="async" style={{width:"100%",height:"100%",objectFit:"cover"}} /></div></div></section>

    <section className="section-tight"><div className="container"><div className="eyebrow">Evidence</div><h2>Experience you can see in the work.</h2><div className="proof-grid">{[["4+ years","Data analysis experience"],["300K+","Security records analysed"],["50%","Reduction in manual data entry"],["194K+","Retail order-line records analysed"],["75K","Sales transactions reviewed"]].map(([a,b])=><div className="proof-card" key={a}><strong>{a}</strong><span>{b}</span></div>)}</div></div></section>

    <section className="section"><div className="container"><div className="eyebrow">Core work</div><h2>Analysis built around business questions.</h2><div className="three-grid">{focus.map(([a,b])=><div className="card" key={a}><h3>{a}</h3><p>{b}</p></div>)}</div></div></section>

    <section className="section-tight"><div className="container"><div className="eyebrow">Featured case studies</div><h2>Four projects worth opening.</h2><p className="lead">Each case study starts with a business problem, shows the data and analysis, explains the checks and decisions, and ends with what the findings mean.</p><div className="project-grid">{featured.map(p => p && <article className="card project-card" key={p.slug}><img className="cover" src={p.cover} alt={`${p.title} project cover`} loading="lazy"/><div className="content"><div className="meta">{p.category}</div><h3>{p.title}</h3><p>{p.short}</p><div className="small">{p.scale}</div><div className="tag-list">{p.tools.slice(0,4).map(t=><span className="tag" key={t}>{t}</span>)}</div><div className="card-actions"><Link className="btn btn-primary" href={`/work/${p.slug}`}>Read Case Study</Link>{p.github !== "https://github.com/oreoluwadaniel" && <a className="btn btn-secondary" href={p.github} target="_blank" rel="noreferrer">Project GitHub</a>}</div></div></article>)}</div><div className="actions"><Link className="btn btn-secondary" href="/work">View All Projects →</Link></div></div></section>

    <section className="section"><div className="container"><div className="eyebrow">How I approach analysis</div><h2>Start with the question, then earn the answer.</h2><div className="steps">{[["01","Frame the question","Define what the business needs to know and what a useful answer would change."],["02","Check the data","Review completeness, duplicates, consistency, grain and other issues that could affect the analysis."],["03","Prepare the data","Clean, join and structure the data so the measures answer the intended question."],["04","Analyse and validate","Test calculations, compare results and check important findings before presenting them."],["05","Explain the finding","State what changed, why it matters, what the data supports and what it does not prove."],["06","Recommend the next step","Turn the finding into a practical action, follow-up analysis or reporting requirement."]].map(([n,a,b])=><div className="card step" key={n}><div className="num">{n}</div><h3>{a}</h3><p>{b}</p></div>)}</div></div></section>

    <section className="section-tight"><div className="container"><div className="eyebrow">What I do</div><h2>Practical analytics support.</h2><div className="service-grid">{services.map(([a,b])=><div className="card" key={a}><h3>{a}</h3><p>{b}</p><Link href="/contact" className="small">Discuss a project →</Link></div>)}</div></div></section>

    <section className="section"><div className="container two-col"><div><div className="eyebrow">About</div><h2>Business understanding matters as much as the tools.</h2></div><div><p className="lead">I am a Data Analyst with 4+ years of experience working on revenue, customer, risk and operational questions.</p><p>I use SQL, Python, Power BI, Excel, statistics and data preparation methods to turn raw business information into analysis and reporting that people can use.</p><div className="actions"><Link className="btn btn-secondary" href="/about">About Me</Link><Link className="btn btn-secondary" href="/experience">View Experience</Link></div></div></div></section>

    <section className="section"><div className="container contact-box"><div><div className="eyebrow">Contact</div><h2>Have a data or reporting problem?</h2><p className="lead">Tell me what you are trying to understand, what data you have and where the current reporting falls short.</p><a className="btn btn-primary" href="mailto:danolatunji25@gmail.com">danolatunji25@gmail.com</a></div><div><Link className="btn btn-secondary" href="/contact">Send an enquiry →</Link></div></div></section>
  </main>;
}