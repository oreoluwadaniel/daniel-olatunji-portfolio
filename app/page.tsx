import Link from "next/link";
import { projects } from "@/lib/projects";

const featuredSlugs = ["crestline-inventory-decision-support", "ab-testing-experimentation", "bloomcrest-revenue-intelligence", "weatherintel"];

const capabilities: [string, string][] = [
  ["Revenue and customer analysis", "Where revenue comes from, which customers are worth keeping, and which ones went quiet three months before anyone noticed."],
  ["Reporting and dashboards", "Power BI and Excel models with a measure layer that resolves at the right grain, so two reports stop disagreeing."],
  ["Data quality and ETL", "Profiling, validation and exception handling before load. Flagged records get reported, not deleted."],
  ["Operational analytics", "Delivery, inventory, workforce and cost questions, answered from the operational tables and not a summary export."],
  ["Forecasting and statistics", "Forecasts with a stated error and a baseline they were tested against. If the model cannot beat naive, I say so."],
  ["Semantic and data modelling", "Star schemas, dimensional models and semantic layers in PostgreSQL, Power BI and Microsoft Fabric."],
];

const steps: [string, string, string][] = [
  ["01", "Get the question right", "What decision is waiting on this, and what answer would change it. Vague briefs produce vague dashboards."],
  ["02", "Interrogate the data", "Grain, completeness, duplicates, broken keys. Most wrong reports are wrong here, long before the analysis."],
  ["03", "Build and check", "Model, measure, then test the numbers against source. A query that runs is not a query that is right."],
  ["04", "Say what it means", "What changed, what it costs, what the data supports, and where the evidence stops."],
];

export default function Home() {
  const featured = featuredSlugs.map((slug) => projects.find((p) => p.slug === slug)).filter(Boolean);
  return <main>
    <section className="hero"><div className="container hero-grid"><div className="hero-copy">
      <div className="eyebrow">Data analyst · Business intelligence · Lagos, Nigeria</div>
      <h1>Daniel Olatunji</h1>
      <p className="hero-role">I find out why the numbers moved, and what to do about it.</p>
      <p>Four years spent on revenue, customers, risk, logistics and the data-quality problems sitting underneath all of them. Fifteen case studies, with the evidence and the limits stated on each one.</p>
      <div className="actions"><Link className="btn btn-primary" href="/work">See the work</Link><a className="btn btn-secondary" href="/cv/Daniel_Olatunji_CV.pdf" download>Download CV</a><Link className="btn btn-secondary" href="/contact">Get in touch</Link></div>
    </div><div className="portrait"><img src="/images/daniel-olatunji.jpg" srcSet="/images/daniel-olatunji.jpg 1x, /images/daniel-olatunji@2x.jpg 2x" alt="Daniel Olatunji" width="900" height="1100" fetchPriority="high" decoding="async" /></div></div></section>

    <section className="section-tight"><div className="container"><div className="eyebrow">In role</div><h2>Four years, measured.</h2><div className="proof-grid">{([ ["4+ years", "In data and BI roles"], ["300,000+", "Security records analysed"], ["50%", "Less manual data entry"], ["40%", "Fewer data errors after rebuild"], ["25%", "Retention improvement supported"] ] as [string,string][]).map(([a,b]) => <div className="proof-card" key={a}><strong>{a}</strong><span>{b}</span></div>)}</div><p className="small footnote">Figures from employment and consulting work. Project figures are stated separately on each case study.</p></div></section>

    <section className="section"><div className="container"><div className="eyebrow">Featured work</div><h2>Four projects, and what each one found.</h2><p className="lead">Every case study opens with the business problem, shows the method, states the result, and ends with what the evidence does not cover.</p><div className="project-grid">{featured.map(p => p && <article className="card project-card" key={p.slug}><Link href={`/work/${p.slug}`} className="cover-link"><img className="cover" src={p.cover} alt={`${p.title}: chart summary of the analysis`} width="1600" height="900" loading="lazy" /></Link><div className="content"><div className="meta">{p.category}</div><h3><Link href={`/work/${p.slug}`}>{p.title}</Link></h3><p>{p.short}</p><div className="small">{p.scale}</div><div className="tag-list">{p.tools.slice(0,4).map(t => <span className="tag" key={t}>{t}</span>)}</div><div className="card-actions"><Link className="btn btn-primary" href={`/work/${p.slug}`}>Read the case study</Link>{p.github && <a className="btn btn-secondary" href={p.github} target="_blank" rel="noreferrer">Repository</a>}</div></div></article>)}</div><div className="actions"><Link className="btn btn-secondary" href="/work">All fifteen projects →</Link></div></div></section>

    <section className="section-tight"><div className="container"><div className="eyebrow">What I work on</div><h2>Six things I get called in for.</h2><div className="three-grid">{capabilities.map(([a,b]) => <div className="card" key={a}><h3>{a}</h3><p>{b}</p></div>)}</div></div></section>
    <section className="section"><div className="container"><div className="eyebrow">Method</div><h2>Four steps, and the third is where most reporting fails.</h2><div className="steps four">{steps.map(([n,a,b]) => <div className="card step" key={n}><div className="num">{n}</div><h3>{a}</h3><p>{b}</p></div>)}</div></div></section>
    <section className="section-tight"><div className="container two-col"><div><div className="eyebrow">Where this is going</div><h2>The analyst job changed. I changed with it.</h2></div><div><p className="lead">Writing a query and drawing a chart is no longer the scarce part. Tooling handles a lot of it, and a growing share of a dashboard request can be answered without an analyst at all.</p><p>What still needs a person: choosing the metric that matches the decision, spotting that a number is wrong before it reaches a board pack, designing the model everything else reads from, and arguing the result in front of people who disagree. That is where I spend my time.</p><p>Practically, that means I work on semantic and dimensional models as much as reports, use AI tooling to move faster through exploration and boilerplate, and keep validation as a step nobody skips. Current stack includes PostgreSQL, Power BI, Microsoft Fabric, Azure Data Factory, Python and SQL.</p></div></div></section>
  </main>;
}
