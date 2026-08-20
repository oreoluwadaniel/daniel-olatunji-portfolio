import Link from "next/link";

const services = [
  ["Management Reporting", "Build reporting that shows sales, revenue, customers, costs and operational performance clearly."],
  ["Power BI & Dashboard Development", "Turn prepared business data into dashboards with useful KPIs, trends, comparisons and drill-downs."],
  ["Data Cleaning & Quality", "Find duplicates, missing information, inconsistent records and exceptions before they distort reporting."],
  ["Revenue & Customer Analysis", "Analyse revenue, customer behaviour, retention, pipeline and channel performance."],
  ["Operational Analytics", "Use data to investigate inventory, delivery, workforce, cost and process problems."],
  ["SQL, ETL & Data Preparation", "Prepare reliable analysis-ready datasets from operational and relational data sources."]
];

export const metadata = { title: "Services | Daniel Olatunji", description: "Data analysis, business intelligence, reporting, dashboard development, data quality and operational analytics services.", alternates: { canonical: "https://daniel-olatunji-portfolio.vercel.app/services" }, openGraph: { title: "Services | Daniel Olatunji", description: "Data analysis, business intelligence, reporting and data preparation services.", url: "https://daniel-olatunji-portfolio.vercel.app/services" } };

export default function ServicesPage() {
  return <main><section className="section"><div className="container">
    <div className="eyebrow">What I do</div><h1>Data and business intelligence work.</h1><p className="lead">I help teams answer business questions with cleaner data, reliable reporting and analysis that can be checked and explained.</p>
    <div className="service-grid">{services.map(([a,b])=><div className="card" key={a}><h3>{a}</h3><p>{b}</p><Link className="btn btn-secondary" href="/contact">Discuss a project</Link></div>)}</div>
  </div></section></main>;
}
