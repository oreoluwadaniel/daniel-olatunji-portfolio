import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://daniel-olatunji-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Daniel Olatunji | Data Analyst & Business Intelligence Analyst", template: "%s | Daniel Olatunji" },
  description: "Daniel Olatunji is a Data Analyst and Business Intelligence Analyst working across revenue, customer, risk and operational analysis, reporting and data quality.",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Daniel Olatunji | Data Analyst & Business Intelligence Analyst",
    description: "Data analysis, business intelligence, reporting and case studies by Daniel Olatunji.",
    url: siteUrl,
    siteName: "Daniel Olatunji",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Daniel Olatunji, Data Analyst and Business Intelligence Analyst" }],
  },
  twitter: { card: "summary_large_image", title: "Daniel Olatunji | Data Analyst & Business Intelligence Analyst", description: "Data analysis, business intelligence, reporting and case studies by Daniel Olatunji.", images: ["/og-image.svg"] },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Daniel Olatunji",
  jobTitle: "Data Analyst and Business Intelligence Analyst",
  url: siteUrl,
  email: "mailto:danolatunji25@gmail.com",
  sameAs: ["https://www.linkedin.com/in/daniel-olatunji/", "https://github.com/oreoluwadaniel"],
  knowsAbout: ["Data Analysis", "Business Intelligence", "Power BI", "SQL", "Python", "Data Quality", "ETL", "Statistics", "Forecasting"]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}