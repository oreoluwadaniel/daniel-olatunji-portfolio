import Link from "next/link";
import { projects } from "@/lib/projects";

const capabilities: [string, string][] = [
  ["Revenue and customer analysis", "See where revenue comes from, which customers matter most, and where buying activity is changing."],
  ["Reporting", "Bring key business figures into one consistent view so management reports agree on the same underlying numbers."],
  ["Data quality", "Check completeness, duplicates, broken relationships and inconsistent definitions before they affect reporting."],
  ["Operational analysis", "Use sales, delivery, workforce and cost records to identify where day-to-day performance is moving off track."],
  ["Forecasting and testing", "Compare expected outcomes with actual performance and test whether a change is worth acting on."],
  ["Data structure and automation", "Organise business records and repeat reporting work so information can be maintained without rebuilding the process every week."],
];

const steps: [string, string, string][] = [
  ["01", "Define the decision", "Start with the business decision, the evidence needed to support it, and what would change if the answer is different."],
  ["02", "Check the data", "Review completeness, duplicates, broken links and inconsistent definitions before relying on the results."],
  ["03", "Build and check", "Build the analysis, trace the figures back to the source, and test the result before it reaches a report."],
  ["04", "State the result", "Explain what changed, where attention is needed, what the evidence supports, and what should happen next."],
];

export default function Home() {
  return <main>
    <section className="hero"><div className="container hero-grid"><div className="hero-copy">
      <div className="eyebrow">Data analyst · Business intelligence</div>
      <h1>Daniel Olatunji</h1>
      <p className="hero-role">I find out why the numbers changed, and what to do about it.</p>
      <p>I turn business numbers into a clear view of what is happening, where attention is needed, and what should happen next.</p>
      <div className="actions"><Link className="btn btn-primary" href="/work">See the work</Link><a className="btn btn-secondary" href="/cv/Daniel_Olatunji_CV.pdf" download>Download CV</a><Link className="btn btn-secondary" href="/contact">Get in touch</Link></div>
    </div><div className="portrait"><img src="/images/daniel-olatunji.svg" alt="Daniel Olatunji" width="900" height="1100" fetchPriority="high" decoding="async" /></div></div></section>

    <section className="section"><div className="container"><div className="eyebrow">Case studies</div><h2>Four projects built around real business problems.</h2><p className="lead">Each case focuses on the business situation, the analysis, the evidence and the decision it supports. The supporting code and documentation are public in the repositories.</p><div className="project-grid">{projects.map(p => <article className="card project-card" key={p.slug}><Link href={`/work/${p.slug}`} className="cover-link"><img className="cover" src={p.cover} alt={p.title} width="1600" height="900" loading="lazy" /></Link><div className="content"><div className="meta">{p.category}</div><h3><Link href={`/work/${p.slug}`}>{p.title}</Link></h3><p>{p.short}</p><div className="small">{p.scale}</div><div className="tag-list">{p.tools.slice(0,4).map(t => <span className="tag" key={t}>{t}</span>)}</div><div className="card-actions"><Link className="btn btn-primary" href={`/work/${p.slug}`}>Read the case study</Link><a className="btn btn-secondary" href={p.github} target="_blank" rel="noreferrer">Repository</a></div></div></article>)}</div></div></section>

    <section className="section-tight"><div className="container"><div className="eyebrow">What I work on</div><h2>Where my analysis is most useful.</h2><div className="three-grid">{capabilities.map(([a,b]) => <div className="card" key={a}><h3>{a}</h3><p>{b}</p></div>)}</div></div></section>
    <section className="section"><div className="container"><div className="eyebrow">Method</div><h2>Four steps.</h2><div className="steps four">{steps.map(([n,a,b]) => <div className="card step" key={n}><div className="num">{n}</div><h3>{a}</h3><p>{b}</p></div>)}</div></div></section>
  </main>;
}
