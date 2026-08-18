export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Daniel Olatunji",
    jobTitle: "Data Analyst | Business Intelligence Analyst",
    email: "mailto:danolatunji25@gmail.com",
    url: "https://daniel-olatunji-portfolio.vercel.app",
    sameAs: [
      "https://www.linkedin.com/in/daniel-olatunji/",
      "https://github.com/oreoluwadaniel",
      "https://medium.com/@oluwafikayore",
    ],
    knowsAbout: ["Data analysis", "Business intelligence", "SQL", "Python", "Power BI", "Data quality", "CRM data", "Revenue analytics"],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
