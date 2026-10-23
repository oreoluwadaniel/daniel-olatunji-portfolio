import Link from "next/link";
import { projects } from "@/lib/projects";

const capabilities: [string, string][] = [
  ["Profit and margin analysis", "Trace sales down to profit and rank the costs, channels and campaigns that take it."],
  ["Credit and payment risk", "Size default and failed-payment exposure, and test whether the risk labels in use hold up."],
  ["Operations reporting", "Connect delivery, delay, fleet and stock records so one report shows where service is slipping."],
  ["Revenue cycle and collections", "Split billed revenue into cash received, written off and still owed, by payer and cause."],
  ["Revenue and customer health", "Separate recurring revenue growth from churn, falling product use and unpaid invoices."],
  ["Data quality and migration", "Find duplicates, missing owners and broken links, and keep failed records visible instead of deleting them."],
];

const steps: [string, string, string][] = [
  ["01", "Define the decision", "Agree what decision the analysis supports and what evidence would change it."],
  ["02", "Prepare the data", "Clean and relate the tables, and set each measure's definition before building."],
  ["03", "Check the numbers", "Trace each figure to its source and test it against a second calculation."],
  ["04", "Recommend", "State what the data shows, what it does not prove, and what to do next."],
];

export default function Home() {
  return <main>
    <section className="hero"><div className="container hero-grid"><div className="hero-copy">
      <div className="eyebrow">Data Analyst | Business Intelligence Analyst</div>
      <h1>Daniel Olatunji</h1>
      <p className="hero-role">I find where a business loses money and show what to do about it.</p>
      <p>I build Power BI reports and SQL analysis that start with a business problem and end with a ranked list of actions. My case studies cover revenue, customer behaviour, lending risk, payments, retail and logistics. They show what is changing, where the problem sits, and what action the evidence supports.</p>
      <p>Each one shows the reasoning behind the charts: how the data was prepared, how every measure is defined, what the numbers can and cannot prove, and what the business should do next.</p>
      <div className="actions"><Link className="btn btn-primary" href="/work">See the work</Link><a className="btn btn-secondary" href="/cv/Daniel_Olatunji_CV.pdf" download>Download CV</a><Link className="btn btn-secondary" href="/contact">Get in touch</Link></div>
    </div><div className="portrait"><img src="/images/daniel-olatunji.svg" alt="Daniel Olatunji" width="900" height="1100" fetchPriority="high" decoding="async" /></div></div></section>

    <section className="section"><div className="container"><div className="eyebrow">Case studies</div><h2>Ten case studies, each built around a business problem.</h2><p className="lead">Every case study gives the problem, the approach, the findings and the recommended action. Technical definitions are at the bottom of each page.</p><div className="project-grid">{projects.map(p => <article className="card project-card" key={p.slug}><Link href={`/work/${p.slug}`} className="cover-link"><img className="cover" src={p.cover} alt={p.title} width="1600" height="900" loading="lazy" /></Link><div className="content"><div className="meta">{p.category}</div><h3><Link href={`/work/${p.slug}`}>{p.title}</Link></h3><p>{p.short}</p><div className="small">{p.scale}</div><div className="tag-list">{p.tools.slice(0,4).map(t => <span className="tag" key={t}>{t}</span>)}</div><div className="card-actions"><Link className="btn btn-primary" href={`/work/${p.slug}`}>View full case study</Link></div></div></article>)}</div></div></section>

    <section className="section-tight"><div className="container"><div className="eyebrow">Focus areas</div><h2>What I analyse.</h2><div className="three-grid">{capabilities.map(([a,b]) => <div className="card" key={a}><h3>{a}</h3><p>{b}</p></div>)}</div></div></section>
    <section className="section"><div className="container"><div className="eyebrow">Method</div><h2>How each project runs.</h2><div className="steps four">{steps.map(([n,a,b]) => <div className="card step" key={n}><div className="num">{n}</div><h3>{a}</h3><p>{b}</p></div>)}</div></div></section>
  </main>;
}
