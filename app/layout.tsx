import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://daniel-olatunji-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Daniel Olatunji | Data Analyst & BI Analyst", template: "%s | Daniel Olatunji" },
  description: "Data analyst and business intelligence analyst. Four years across revenue, customer, stock and operational analysis, with five case studies and the numbers behind each one.",
  keywords: ["data analyst", "business intelligence analyst", "Power BI analyst", "SQL analyst", "data quality", "remote data analyst", "analytics consultant"],
  authors: [{ name: "Daniel Olatunji", url: siteUrl }],
  creator: "Daniel Olatunji",
  alternates: { canonical: siteUrl },
  openGraph: { title: "Daniel Olatunji | Data Analyst & BI Analyst", description: "Four years on revenue, customer, stock and operational analysis. Five case studies with the numbers and the decisions they support.", url: siteUrl, siteName: "Daniel Olatunji", locale: "en_GB", type: "website" },
  twitter: { card: "summary_large_image", title: "Daniel Olatunji | Data Analyst & BI Analyst", description: "Five case studies covering revenue, inventory, product experimentation, forecasting and data quality." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
};

const personSchema = { "@context": "https://schema.org", "@type": "Person", name: "Daniel Olatunji", jobTitle: "Data Analyst and Business Intelligence Analyst", url: siteUrl, email: "mailto:danolatunji25@gmail.com", image: siteUrl + "/images/daniel-olatunji.svg", sameAs: ["https://www.linkedin.com/in/daniel-olatunji/", "https://github.com/oreoluwadaniel"], knowsAbout: ["Data Analysis", "Business Intelligence", "Power BI", "DAX", "SQL", "PostgreSQL", "Python", "Data Quality", "ETL", "Dimensional Modelling", "Microsoft Fabric", "Forecasting", "Statistics"] };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en-GB"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} /><a className="skip" href="#main">Skip to content</a><Header /><div id="main">{children}</div><Footer /></body></html>;
}
