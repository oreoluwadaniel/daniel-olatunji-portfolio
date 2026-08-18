import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Olatunji | Data Analyst and BI Consultant",
  description:
    "Daniel Olatunji helps businesses clean up unreliable data, improve reporting, automate repetitive work, and build practical systems that support better decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
