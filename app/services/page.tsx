import Link from "next/link";

const services = [
  ["Business Reporting & Dashboards","Turn scattered business data into clear reporting for sales, revenue, customers and operations."],
  ["Data Cleaning & Quality","Find duplicates, missing information, inconsistent records and other problems before they affect reporting."],
  ["CRM Data & Migration","Clean, organise and prepare CRM data for migration, reporting and ongoing use."],
  ["Revenue & Customer Analysis","Analyse revenue, customer behaviour, pipeline, retention and channel performance."],
  ["Operational Analytics","Use data to investigate inventory, delivery, workforce, cost and process problems."],
  ["Workflow Automation","Reduce repetitive manual work by connecting business systems, spreadsheets and workflows."]
];

export default function ServicesPage() {
  return <main><section className="section"><div className="container">
    <div className="eyebrow">Services</div><h1>What I can help with.</h1><p className="lead">Practical support for businesses that need cleaner data, clearer reporting or less repetitive manual work.</p>
    <div className="service-grid">{services.map(([a,b])=><div className="card" key={a}><h3>{a}</h3><p>{b}</p><Link className="btn btn-secondary" href="/contact">Discuss a project</Link></div>)}</div>
  </div></section></main>;
}