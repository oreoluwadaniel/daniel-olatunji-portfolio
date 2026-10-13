import Link from "next/link";

const services = [
  ["Power BI Reporting", "Reports with defined measures, clear KPIs and drill-downs that management can read without help."],
  ["Profit and Margin Analysis", "Trace sales to profit and rank the costs, channels and products that take it."],
  ["Risk and Collections Analysis", "Size default, failed-payment and unpaid-balance exposure and find the causes."],
  ["Operations Analysis", "Link delivery, delay, fleet, stock and cost data to show where service slips."],
  ["Data Cleaning and Checks", "Find duplicates, missing fields and broken links before they distort a report."],
  ["SQL and Data Preparation", "Prepare analysis-ready tables from operational and relational sources."]
];

export const metadata = { title: "Services", description: "Power BI reporting, profit and risk analysis, operations analysis, data cleaning and SQL data preparation.", alternates: { canonical: "https://daniel-olatunji-portfolio.vercel.app/services" }, openGraph: { title: "Services | Daniel Olatunji", description: "Power BI reporting, analysis and data preparation services.", url: "https://daniel-olatunji-portfolio.vercel.app/services" } };

export default function ServicesPage() {
  return <main><section className="section"><div className="container">
    <div className="eyebrow">What I do</div><h1>What I can do for you.</h1><p className="lead">I answer a specific business question with clean data, measures that are defined in writing and a recommendation you can act on.</p>
    <div className="service-grid">{services.map(([a,b])=><div className="card" key={a}><h3>{a}</h3><p>{b}</p><Link className="btn btn-secondary" href="/contact">Discuss a project</Link></div>)}</div>
  </div></section></main>;
}
