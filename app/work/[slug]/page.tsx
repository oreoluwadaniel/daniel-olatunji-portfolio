import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find(x => x.slug === slug);
  if (!p) notFound();
  return <main>
    <section className="case-hero"><div className="container case-hero-grid"><div>
      <div className="eyebrow">{p.category}</div><h1>{p.title}</h1><p className="lead">{p.short}</p><div className="notice">{p.status}</div>
      <div className="actions"><a className="btn btn-primary" href={p.github} target="_blank" rel="noreferrer">View Project GitHub</a><Link className="btn btn-secondary" href="/contact">Contact Me</Link></div>
    </div><div className="case-cover"><img src={p.cover} alt={`${p.title} project cover`} width="1200" height="675" fetchPriority="high"/></div></div></section>

    <section className="container snapshot"><div className="card"><span className="small">Scale</span><strong>{p.scale}</strong></div><div className="card"><span className="small">Data</span><strong>{p.status}</strong></div><div className="card"><span className="small">Main tools</span><strong>{p.tools.slice(0,3).join(" · ")}</strong></div><div className="card"><span className="small">Project area</span><strong>{p.category.split(" · ")[0]}</strong></div></section>

    <section className="case-section"><div className="container copy"><div className="eyebrow">1 · Business context</div><h2>Why this problem matters</h2><p>{p.context}</p></div></section>
    <section className="case-section"><div className="container copy"><div className="eyebrow">2 · Problem</div><h2>What needed fixing?</h2><p>{p.problem}</p></div></section>
    <section className="case-section"><div className="container copy"><div className="eyebrow">3 · Objective</div><h2>What the analysis needed to achieve</h2><p>{p.objective}</p></div></section>

    <section className="case-section"><div className="container"><div className="eyebrow">4 · Business questions</div><h2>Questions the analysis had to answer</h2><ul className="case-list">{p.questions.map(q=><li key={q}>{q}</li>)}</ul></div></section>
    <section className="case-section"><div className="container"><div className="eyebrow">5 · Data</div><h2>What I worked with</h2><ul className="case-list">{p.data.map(x=><li key={x}>{x}</li>)}</ul></div></section>

    <section className="case-section"><div className="container"><div className="eyebrow">6 · Analysis method</div><h2>How I worked through the problem</h2><ol className="case-list">{p.work.map(x=><li key={x}>{x}</li>)}</ol><div className="workflow">{p.workflow.map(x=><div key={x}>{x}</div>)}</div></div></section>

    <section className="case-section"><div className="container"><div className="eyebrow">7 · Checks and decisions</div><h2>How I kept the analysis from becoming guesswork</h2><div className="finding-grid">
      <div className="card"><h3>Data checks</h3><p>Important results are preceded by profiling, cleaning, validation or reconciliation where the project requires it. Records that cannot be trusted are treated as exceptions rather than silently disappearing.</p></div>
      <div className="card"><h3>Method choice</h3><p>Analytical methods are tied to the question. Forecasts are compared with baselines where applicable, and operational findings are separated from assumptions about cause.</p></div>
      <div className="card"><h3>Evidence boundary</h3><p>The findings below describe what the available data supports. They do not turn a correlation, model output or synthetic dataset into proof of a business outcome.</p></div>
      <div className="card"><h3>Reproducibility</h3><p>The GitHub repository provides the technical reference point for the underlying work, code, queries or project documentation where available.</p></div>
    </div></div></section>

    <section className="case-section"><div className="container"><div className="eyebrow">8 · Findings</div><h2>What the analysis showed</h2><div className="finding-grid">{p.findings.map(x=><div className="card" key={x}><p style={{margin:0,color:"#d8dee7"}}>{x}</p></div>)}</div></div></section>
    <section className="case-section"><div className="container copy"><div className="eyebrow">9 · Business meaning</div><h2>What the findings mean for the business</h2><p>{p.meaning}</p></div></section>
    <section className="case-section"><div className="container"><div className="eyebrow">10 · Recommendations</div><h2>What I would do next</h2><ul className="case-list">{p.recommendations.map(x=><li key={x}>{x}</li>)}</ul></div></section>
    <section className="case-section"><div className="container copy"><div className="eyebrow">11 · Deliverable</div><h2>What the project produced</h2><p>{p.output}</p></div></section>
    <section className="case-section"><div className="container"><div className="eyebrow">12 · Limitations</div><h2>What this work does not claim</h2><ul className="case-list">{p.limitations.map(x=><li key={x}>{x}</li>)}</ul></div></section>
    <section className="case-section"><div className="container"><div className="eyebrow">13 · Tools</div><h2>Tools used</h2><div className="tag-list">{p.tools.map(t=><span className="tag" key={t}>{t}</span>)}</div></div></section>

    <section className="section-tight"><div className="container contact-box"><div><div className="eyebrow">Review the evidence</div><h2>Want to inspect the underlying work?</h2><p>The project repository is the technical reference point for the analysis.</p><a className="btn btn-primary" href={p.github} target="_blank" rel="noreferrer">Open Project GitHub</a></div><div><Link className="btn btn-secondary" href="/contact">Discuss a project →</Link></div></div></section>
  </main>;
}