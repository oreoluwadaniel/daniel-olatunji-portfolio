import Link from "next/link";

export const metadata = {
  title: "About | Daniel Olatunji",
  description: "Daniel Olatunji is a Data Analyst and Business Intelligence Analyst focused on business operations, reporting, revenue, customer and operational analysis.",
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
  <section className="section"><div className="container two-col"><div><div className="eyebrow">About Daniel</div><h1>I help businesses see clearly what their numbers are saying.</h1></div><div><p className="lead">I analyse revenue, customer and operational performance to show what is changing, where problems or opportunities are emerging, and where attention is needed.</p><p>My work brings together the records businesses already have and turns them into clear reporting and analysis that people can use to understand performance and make better decisions.</p><p>I focus on data analysis and business intelligence, with work spanning customer behaviour, data quality, management reporting and the day-to-day activity behind business results. I also work with customer systems and reporting processes when they affect the accuracy of the numbers or the decisions built on them.</p><div className="actions"><a className="btn btn-primary" href="/cv/Daniel_Olatunji_CV.pdf" download>Download CV</a><Link className="btn btn-secondary" href="/work">See the work</Link></div></div></div></section>
  <section className="section"><div className="container"><div className="eyebrow">Core skills</div><h2>What I work with.</h2><div className="three-grid">{skills.map(([a,b])=><div className="card" key={a}><h3>{a}</h3><p>{b}</p></div>)}</div></div></section>
</main>; }
