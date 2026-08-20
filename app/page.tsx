import Link from "next/link";
import { projects } from "@/lib/projects";

const capabilities: [string, string][] = [
  ["Revenue and customer analysis", "Where the revenue comes from, which customers are worth keeping, and which ones went quiet three months before anyone noticed."],
  ["Reporting and dashboards", "Power BI and Excel reporting where two reports stop disagreeing, because the numbers underneath them finally match."],
  ["Data quality", "Checking, validating and flagging before anything reaches a report. Records that fail get reported, not deleted."],
  ["Operational analysis", "Stock, delivery, workforce and cost questions, answered from the underlying records rather than a summary someone exported."],
  ["Forecasting and testing", "Forecasts with a stated error, and a simple benchmark they were raced against. If the model cannot beat the simple option, I say so."],
  ["Data modelling", "Structuring data so a business can ask new questions of it without rebuilding everything from scratch."],
];

const steps: [string, string, string][] = [
  ["01", "Get the question right", "What decision is waiting on this, and what answer would change it. A vague brief produces a vague dashboard."],
  ["02", "Interrogate the data", "Completeness, duplicates, broken links between records. Most wrong reports go wrong here, long before the analysis."],
  ["03", "Build and check", "Build it, then test the numbers against the source. A report that runs is not a report that is right."],
  ["04", "Say what it means", "What changed, what it costs, what the evidence supports, and where the evidence stops."],
];

export default function Home() {
  return <main>
    <section className="hero"><div className="container hero-grid"><div className="hero-copy">
      <div className="eyebrow">Data analyst · Business intelligence · Lagos, Nigeria</div>
      <h1>Daniel Olatunji</h1>
      <p className="hero-role">I find out why the numbers moved, and what to do about it.</p>
      <p>Four years on revenue, customers, stock, risk and the data problems sitting underneath all of them. Five case studies, each one with the numbers and the decision they point to.</p>
      <div className="actions"><Link className="btn btn-primary" href="/work">See the work</Link><a className="btn btn-secondary" href="/cv/Daniel_Olatunji_CV.pdf" download>Download CV</a><Link className="btn btn-secondary" href="/contact">Get in touch</Link></div>
    </div><div className="portrait"><img src="/images/daniel-olatunji.jpg" srcSet="/images/daniel-olatunji.jpg 1x, /images/daniel-olatunji@2x.jpg 2x" alt="Daniel Olatunji" width="900" height="1100" fetchPriority="high" decoding="async" /></div></div></section>

    <section className="section-tight"><div className="container"><div className="eyebrow">In role</div><h2>Four years, measured.</h2><div className="proof-grid">{([ ["4+ years", "In data and BI roles"], ["300,000+", "Security records analysed"], ["50%", "Less manual data entry"], ["40%", "Fewer data errors after rebuild"], ["25%", "Retention improvement supported"] ] as [string,string][]).map(([a,b]) => <div className="proof-card" key={a}><strong>{a}</strong><span>{b}</span></div>)}</div><p className="small footnote">Figures from employment and consulting work. Project figures are stated separately on each case study.</p></div></section>

    <section className="section"><div className="container"><div className="eyebrow">The work</div><h2>Five projects, and what each one found.</h2><p className="lead">Every case study opens with the situation, states what the numbers showed, and ends with what to do about it. The code and documentation behind each one is public.</p><div className="project-grid">{projects.map(p => <article className="card project-card" key={p.slug}><Link href={`/work/${p.slug}`} className="cover-link"><img className="cover" src={p.cover} alt={`${p.title}: visual summary`} width="1600" height="900" loading="lazy" /></Link><div className="content"><div className="meta">{p.category}</div><h3><Link href={`/work/${p.slug}`}>{p.title}</Link></h3><p>{p.short}</p><div className="small">{p.scale}</div><div className="tag-list">{p.tools.slice(0,4).map(t => <span className="tag" key={t}>{t}</span>)}</div><div className="card-actions"><Link className="btn btn-primary" href={`/work/${p.slug}`}>Read the case study</Link><a className="btn btn-secondary" href={p.github} target="_blank" rel="noreferrer">Repository</a></div></div></article>)}</div></div></section>

    <section className="section-tight"><div className="container"><div className="eyebrow">What I work on</div><h2>Six things I get called in for.</h2><div className="three-grid">{capabilities.map(([a,b]) => <div className="card" key={a}><h3>{a}</h3><p>{b}</p></div>)}</div></div></section>
    <section className="section"><div className="container"><div className="eyebrow">Method</div><h2>Four steps, and the third is where most reporting fails.</h2><div className="steps four">{steps.map(([n,a,b]) => <div className="card step" key={n}><div className="num">{n}</div><h3>{a}</h3><p>{b}</p></div>)}</div></div></section>
    <section className="section-tight"><div className="container two-col"><div><div className="eyebrow">Where this is going</div><h2>The analyst job changed. I changed with it.</h2></div><div><p className="lead">Writing a query and drawing a chart is no longer the scarce part. Tooling handles a lot of it, and a growing share of a dashboard request can be answered without an analyst at all.</p><p>What still needs a person: choosing the measure that matches the decision, spotting that a number is wrong before it reaches a board pack, designing the structure everything else reads from, and defending the result in front of people who disagree. That is where I spend my time.</p><p>In practice that means I work on how the data is structured as much as on the reports, use AI tooling to move faster through the routine parts, and keep the checking step as the one nobody skips. Current stack includes PostgreSQL, Power BI, Microsoft Fabric, Azure Data Factory, Python and SQL.</p></div></div></section>
  </main>;
}
