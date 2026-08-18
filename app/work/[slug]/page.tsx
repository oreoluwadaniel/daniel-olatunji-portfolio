import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

const basePath = "/daniel-olatunji-portfolio";

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find(x => x.slug === slug);
  if (!p) notFound();
  return <main>
    <section className="case-hero">
      <div className="container case-hero-grid">
        <div>
          <div className="eyebrow">{p.category}</div>
          <h1>{p.title}</h1>
          <p className="lead">{p.short}</p>
          <div className="notice">{p.status}</div>
          <div className="actions">
            <a className="btn btn-primary" href={p.github} target="_blank" rel="noreferrer">View GitHub</a>
            <Link className="btn btn-secondary" href="/contact">Contact Me</Link>
          </div>
        </div>
        <div className="case-cover"><img src={`${basePath}${p.cover}`} alt={`${p.title} cover`} /></div>
      </div>
    </section>

    <section className="container snapshot">
      <div className="card"><span className="small">Scale</span><strong>{p.scale}</strong></div>
      <div className="card"><span className="small">Data status</span><strong>{p.status}</strong></div>
      <div className="card"><span className="small">Tools</span><strong>{p.tools.slice(0,3).join(" · ")}</strong></div>
      <div className="card"><span className="small">Project type</span><strong>{p.category.split(" · ")[0]}</strong></div>
    </section>

    <section className="case-section"><div className="container copy"><div className="eyebrow">The business</div><h2>Business context</h2><p>{p.context}</p></div></section>
    <section className="case-section"><div className="container copy"><div className="eyebrow">The problem</div><h2>What needed fixing?</h2><p>{p.problem}</p></div></section>
    <section className="case-section"><div className="container copy"><div className="eyebrow">The objective</div><h2>What was the project meant to achieve?</h2><p>{p.objective}</p></div></section>

    <section className="case-section"><div className="container">
      <div className="eyebrow">Questions</div><h2>What needed answers?</h2>
      <ul className="case-list">{p.questions.map(q=><li key={q}>{q}</li>)}</ul>
    </div></section>

    <section className="case-section"><div className="container">
      <div className="eyebrow">Data</div><h2>What was available?</h2>
      <ul className="case-list">{p.data.map(x=><li key={x}>{x}</li>)}</ul>
    </div></section>

    <section className="case-section"><div className="container">
      <div className="eyebrow">The work</div><h2>What I did</h2>
      <ol className="case-list">{p.work.map(x=><li key={x}>{x}</li>)}</ol>
      <div className="workflow">{p.workflow.map(x=><div key={x}>{x}</div>)}</div>
    </div></section>

    <section className="case-section"><div className="container">
      <div className="eyebrow">Findings</div><h2>What the project produced</h2>
      <div className="finding-grid">{p.findings.map(x=><div className="card" key={x}><p style={{margin:0,color:"#d8dee7"}}>{x}</p></div>)}</div>
    </div></section>

    <section className="case-section"><div className="container copy">
      <div className="eyebrow">Business meaning</div><h2>Why it matters</h2><p>{p.meaning}</p>
    </div></section>

    <section className="case-section"><div className="container">
      <div className="eyebrow">Recommendations</div><h2>What could happen next?</h2>
      <ul className="case-list">{p.recommendations.map(x=><li key={x}>{x}</li>)}</ul>
    </div></section>

    <section className="case-section"><div className="container copy">
      <div className="eyebrow">Output</div><h2>Project output</h2><p>{p.output}</p>
    </div></section>

    <section className="case-section"><div className="container">
      <div className="eyebrow">Limitations</div><h2>What this project does not claim</h2>
      <ul className="case-list">{p.limitations.map(x=><li key={x}>{x}</li>)}</ul>
    </div></section>

    <section className="case-section"><div className="container">
      <div className="eyebrow">Tools</div><h2>Tools & skills</h2>
      <div className="tag-list">{p.tools.map(t=><span className="tag" key={t}>{t}</span>)}</div>
    </div></section>

    <section className="section-tight"><div className="container contact-box">
      <div><div className="eyebrow">Continue</div><h2>Want to inspect the work?</h2><p>The GitHub link provides the technical reference point for the project.</p><a className="btn btn-primary" href={p.github} target="_blank" rel="noreferrer">Open GitHub</a></div>
      <div><Link className="btn btn-secondary" href="/contact">Discuss a project →</Link></div>
    </div></section>
  </main>;
}
