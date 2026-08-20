import Link from "next/link";

export const metadata = {
  title: "About | Daniel Olatunji",
  description: "Daniel Olatunji is a Data Analyst and Business Intelligence Analyst working across revenue, customer, stock and operational analysis.",
  alternates: { canonical: "https://daniel-olatunji-portfolio.vercel.app/about" },
};

const skills = [
  ["Data Analysis & Statistics", "SQL, Python, R, hypothesis testing, regression, forecasting"],
  ["Business Intelligence", "Power BI, Excel, Power Query, DAX, Tableau, Looker Studio, KPI reporting"],
  ["Data Preparation & Quality", "SQL, data validation, data cleaning, relational modelling, PostgreSQL"],
  ["Revenue & Customer Analysis", "Revenue analysis, customer segmentation, retention, pipeline and channel performance"],
  ["Business Analysis", "KPI definition, process mapping, requirements analysis and analytical reporting"],
];

const roles = [
  ["Data Analyst / BI Consultant", "Freelance / Consulting · Jun 2025 to Present", "Combined customer, sales and operational records across five businesses, built reporting and dashboards, analysed customer behaviour and improved how customer data is captured and maintained."],
  ["Data Analyst, Risk & Security Intelligence", "Risk Control Services · Feb 2025 to May 2025", "Combined and cleaned internal and SharePoint data, built management dashboards, and examined 300,000+ security records for unusual activity and recurring risk patterns."],
  ["Data Analyst", "Instinct Hub · 2023 to 2024", "Analysed customer activity and account history, built automated reports, ran six analytics workshops and mentored eight junior analysts."],
  ["Business / Data Analyst", "Adullam Technologies Limited · 2022 to 2023", "Reviewed stock and sales records, helped cut overstock, analysed customer buying behaviour and documented sales, inventory and customer processes."],
];

export default function AboutPage() { return <main>
  <section className="section"><div className="container two-col"><div><div className="eyebrow">About Daniel</div><h1>Data analysis built around business questions.</h1></div><div><p className="lead">I am a Data Analyst with 4+ years of experience using data to investigate revenue, customer, stock and operational problems.</p><p>I build reporting models, dashboards and analysis that explain what changed, where the problem sits and what the business should look at next. That work has covered datasets with millions of records, customer behaviour, data quality, forecasting and management reporting.</p><p>My main focus is data analysis and business intelligence. I also work with customer systems and reporting processes when they are part of the problem being analysed.</p><div className="actions"><a className="btn btn-primary" href="/cv/Daniel_Olatunji_CV.pdf" download>Download CV</a><Link className="btn btn-secondary" href="/work">See the work</Link></div></div></div></section>
  <section className="section-tight"><div className="container"><div className="eyebrow">Roles</div><h2>Where I have done this work.</h2><div className="three-grid">{roles.map(([a,b,c])=><div className="card" key={a}><h3>{a}</h3><p className="small">{b}</p><p>{c}</p></div>)}</div><div className="actions" style={{marginTop:28}}><Link className="btn btn-secondary" href="/experience">Full role detail</Link></div></div></section>
  <section className="section"><div className="container"><div className="eyebrow">Core skills</div><h2>What I work with.</h2><div className="three-grid">{skills.map(([a,b])=><div className="card" key={a}><h3>{a}</h3><p>{b}</p></div>)}</div></div></section>
</main>; }
