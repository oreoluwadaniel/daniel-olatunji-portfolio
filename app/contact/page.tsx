import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact", description: "Contact Daniel Olatunji about Power BI reporting, data analysis or analytics work.", alternates: { canonical: "https://daniel-olatunji-portfolio.vercel.app/contact" }, openGraph: { title: "Contact | Daniel Olatunji", description: "Contact Daniel Olatunji about Power BI reporting and data analysis work.", url: "https://daniel-olatunji-portfolio.vercel.app/contact" } };

export default function ContactPage() {
  return <main><section className="section"><div className="container contact-box">
    <div><div className="eyebrow">Contact</div><h1>Have a data or reporting problem?</h1><p className="lead">Tell me the question you need answered, the data you have and where your current reports fall short.</p>
      <p><strong>Email:</strong> <a href="mailto:danolatunji25@gmail.com">danolatunji25@gmail.com</a></p>
      <p><a href="https://medium.com/@oluwafikayore" target="_blank" rel="noreferrer">Medium</a> · <a href="https://github.com/oreoluwadaniel" target="_blank" rel="noreferrer">GitHub</a></p>
    </div>
    <ContactForm />
  </div></section></main>;
}
