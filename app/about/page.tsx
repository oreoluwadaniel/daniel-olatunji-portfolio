import Link from "next/link";

export const metadata = {
  title: "About",
  description: "Daniel Olatunji is a Data Analyst and Business Intelligence Analyst who helps businesses understand performance, identify emerging problems and decide what to do next.",
  alternates: { canonical: "https://daniel-olatunji-portfolio.vercel.app/about" },
};

const skills = [
  ["Data Analysis & Statistics", "SQL, Python, R, hypothesis testing, regression and forecasting"],
  ["Business Intelligence", "Power BI, Excel, Power Query, DAX, Tableau, Looker Studio and KPI reporting"],
  ["Data Preparation & Quality", "SQL, data validation, data cleaning, relational modelling and PostgreSQL"],
  ["Revenue & Customer Analysis", "Revenue analysis, customer segmentation, retention, pipeline and channel performance"],
  ["Business Operations", "KPI definition, process mapping, requirements analysis and operational reporting"],
  ["Cloud & Data Platforms", "Microsoft Azure, Microsoft Fabric, Azure SQL Database, Azure Data Factory and Azure Storage"],
];

export default function AboutPage() { return <main>
  <section className="section"><div className="container two-col"><div><div className="eyebrow">About Daniel</div><h1>I find where a business loses money and show what to do about it.</h1></div><div><p className="lead">I am a Data Analyst and Business Intelligence Analyst. I use reports and SQL analysis to answer business questions, identify what is changing, and recommend actions supported by the evidence.</p><p>My work covers profit and margin, credit and payment risk, delivery and fleet operations, hospital billing and collections, product experiments and data quality.</p><p>I define every measure before I build it, check each figure against its source, and label estimates as estimates. The case studies show that process, not only the finished report.</p><div className="actions"><a className="btn btn-primary" href="/cv/Daniel_Olatunji_CV.pdf" download>Download CV</a><Link className="btn btn-secondary" href="/work">See the work</Link></div></div></div></section>
  <section className="section"><div className="container"><div className="eyebrow">Core skills</div><h2>What I work with.</h2><div className="three-grid">{skills.map(([a,b])=><div className="card" key={a}><h3>{a}</h3><p>{b}</p></div>)}</div></div></section>
</main>; }
