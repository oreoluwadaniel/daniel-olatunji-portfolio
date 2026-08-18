import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://daniel-olatunji-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Daniel Olatunji | Data Analyst & BI Analyst, Lagos", template: "%s | Daniel Olatunji" },
  description: "Data analyst and BI analyst in Lagos. Four years across revenue, customer, risk and operational analysis. Ten case studies with evidence, methods and limits stated clearly.",
  keywords: ["data analyst", "business intelligence analyst", "Power BI analyst", "SQL analyst", "data quality", "Lagos", "Nigeria", "remote data analyst"],
  authors: [{ name: "Daniel Olatunji", url: siteUrl }],
  creator: "Daniel Olatunji",
  alternates: { canonical: siteUrl },
  openGraph: { title: "Daniel Olatunji | Data Analyst & BI Analyst", description: "Four years on revenue, customer, risk and operational analysis. Ten case studies with evidence, methods and limits stated clearly.", url: siteUrl, siteName: "Daniel Olatunji", locale: "en_GB", type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Daniel Olatunji, data analyst and business intelligence analyst" }] },
  twitter: { card: "summary_large_image", title: "Daniel Olatunji | Data Analyst & BI Analyst", description: "Ten case studies covering revenue, customer, risk, forecasting, data quality and business intelligence.", images: ["/og-image.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
};

const personSchema = { "@context": "https://schema.org", "@type": "Person", name: "Daniel Olatunji", jobTitle: "Data Analyst and Business Intelligence Analyst", url: siteUrl, email: "mailto:danolatunji25@gmail.com", image: siteUrl + "/images/daniel-olatunji.jpg", address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" }, alumniOf: { "@type": "CollegeOrUniversity", name: "University of Lagos" }, sameAs: ["https://www.linkedin.com/in/daniel-olatunji/", "https://github.com/oreoluwadaniel"], knowsAbout: ["Data Analysis", "Business Intelligence", "Power BI", "DAX", "SQL", "PostgreSQL", "Python", "Data Quality", "ETL", "Dimensional Modelling", "Microsoft Fabric", "Forecasting", "Statistics"] };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en-GB"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} /><a className="skip" href="#main">Skip to content</a><Header /><div id="main">{children}</div><Footer /></body></html>;
}
