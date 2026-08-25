import Link from "next/link";
import { projects } from "@/lib/projects";

const capabilities: [string, string][] = [
  ["Revenue and customer analysis", "Where revenue comes from, which customers are worth keeping, and which ones went quiet before the monthly numbers showed it."],
  ["Reporting", "Business reporting where two reports stop disagreeing because the numbers underneath them finally match."],
  ["Data quality", "Checking, validating and flagging before anything reaches a report. Records that fail get reported, not deleted."],
  ["Operational analysis", "Delivery, workforce and cost questions answered from the underlying records rather than a summary someone exported."],
  ["Forecasting and testing", "Forecasts with a stated error, and a simple benchmark beside them. If the more complicated option does not earn its keep, I say so."],
  ["Data structure and automation", "Structuring records and repeat processes so the same reporting work does not have to be rebuilt every week."],
];

const steps: [string, string, string][] = [
  ["01", "Define the decision", "What decision is waiting on this, and what answer would change it? A vague question produces a vague report."],
  ["02", "Check the data", "Completeness, duplicates, broken links between records and inconsistent definitions. Many reporting errors start here."],
  ["03", "Build and check", "Build the analysis, then test the numbers against the source. A report that runs is not a report that is right."],
  ["04", "State the result", "What changed, what it costs, what the evidence supports, and what should happen next."],
];

export default function Home() {
  return <main>
    <section className="hero"><div className="container hero-grid"><div className="hero-copy">
      <div className="eyebrow">Data analyst · Business intelligence</div>
      <h1>Daniel Olatunji</h1>
      <p className="hero-role">I find out why the numbers changed, and what to do about it.</p>
      <p>Four years across revenue, customers, risk and reporting. Five case studies, each built around a business question, the numbers behind it and the decision they support.</p>
      <div className="actions"><Link className="btn btn-primary" href="/work">See the work</Link><a className="btn btn-secondary" href="/cv/Daniel_Olatunji_CV.pdf" download>Download CV</a><Link className="btn btn-secondary" href="/contact">Get in touch</Link></div>
    </div><div className="portrait"><img src="/images/daniel-olatunji.svg" alt="Daniel Olatunji" width="900" height="1100" fetchPriority="high" decoding="async" /></div></div></section>

    <section className="section"><div className="container"><div className="eyebrow">Case studies</div><h2>Five projects built around real business questions.</h2><p className="lead">Each case opens with the situation, shows what the numbers revealed, and ends with a decision or recommendation. The supporting code and documentation are public in the repositories.</p><div className="project-grid">{projects.map(p => <article className="card project-card" key={p.slug}><Link href={`/work/${p.slug}`} className="cover-link"><img className="cover" src={p.cover} alt={`${p.title}: visual summary`} width="1600" height="900" loading="lazy" /></Link><div className="content"><div className="meta">{p.category}</div><h3><Link href={`/work/${p.slug}`}>{p.title}</Link></h3><p>{p.short}</p><div className="small">{p.scale}</div><div className="tag-list">{p.tools.slice(0,4).map(t => <span className="tag" key={t}>{t}</span>)}</div><div className="card-actions"><Link className="btn btn-primary" href={`/work/${p.slug}`}>Read the case study</Link><a className="btn btn-secondary" href={p.github} target="_blank" rel="noreferrer">Repository</a></div></div></article>)}</div></div></section>

    <section className="section-tight"><div className="container"><div className="eyebrow">What I work on</div><h2>Where my analysis is most useful.</h2><div className="three-grid">{capabilities.map(([a,b]) => <div className="card" key={a}><h3>{a}</h3><p>{b}</p></div>)}</div></div></section>
    <section className="section"><div className="container"><div className="eyebrow">Method</div><h2>Four steps.</h2><div className="steps four">{steps.map(([n,a,b]) => <div className="card step" key={n}><div className="num">{n}</div><h3>{a}</h3><p>{b}</p></div>)}</div></div></section>
  </main>;
}
