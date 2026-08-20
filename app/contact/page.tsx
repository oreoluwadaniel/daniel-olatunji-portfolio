import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact | Daniel Olatunji", description: "Contact Daniel Olatunji about data analysis, business intelligence, reporting or analytics work.", alternates: { canonical: "https://daniel-olatunji-portfolio.vercel.app/contact" }, openGraph: { title: "Contact | Daniel Olatunji", description: "Contact Daniel Olatunji about data analysis, business intelligence and reporting work.", url: "https://daniel-olatunji-portfolio.vercel.app/contact" } };

export default function ContactPage() {
  return <main><section className="section"><div className="container contact-box">
    <div><div className="eyebrow">Contact</div><h1>Have a data or reporting problem?</h1><p className="lead">Tell me what you are trying to understand, what data you have and where the current reporting falls short.</p>
      <p><strong>Email:</strong> <a href="mailto:danolatunji25@gmail.com">danolatunji25@gmail.com</a></p>
      <p><a href="https://www.linkedin.com/in/daniel-olatunji/" target="_blank" rel="noreferrer">LinkedIn</a> · <a href="https://github.com/oreoluwadaniel" target="_blank" rel="noreferrer">GitHub</a></p>
    </div>
    <ContactForm />
  </div></section></main>;
}
