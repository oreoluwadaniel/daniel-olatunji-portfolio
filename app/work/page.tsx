import Link from "next/link";
import { projects } from "@/lib/projects";

const basePath = "/daniel-olatunji-portfolio";

export default function WorkPage() {
  return <main>
    <section className="section">
      <div className="container">
        <div className="eyebrow">Selected work</div>
        <h1>Projects</h1>
        <p className="lead">A collection of projects covering revenue, retail, CRM data, data quality, operations, forecasting and automation.</p>
        <div className="project-grid">
          {projects.map(p=><article className="card project-card" key={p.slug}>
            <img className="cover" src={`${basePath}${p.cover}`} alt={`${p.title} project cover`} />
            <div className="content">
              <div className="meta">{p.category}</div>
              <h3>{p.title}</h3>
              <p>{p.short}</p>
              <div className="small">{p.scale}</div>
              <div className="tag-list">{p.tools.map(t=><span className="tag" key={t}>{t}</span>)}</div>
              <div className="card-actions"><Link className="btn btn-primary" href={`/work/${p.slug}`}>Read Case Study</Link><a className="btn btn-secondary" href={p.github} target="_blank" rel="noreferrer">GitHub</a></div>
            </div>
          </article>)}
        </div>
      </div>
    </section>
  </main>;
}
