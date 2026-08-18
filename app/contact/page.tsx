import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return <main><section className="section"><div className="container contact-box">
    <div><div className="eyebrow">Contact</div><h1>Have a data, reporting or process problem?</h1><p className="lead">If the data is messy, the reporting is unreliable, the CRM needs cleaning, or a repetitive process needs automating, tell me what is going on.</p>
      <p><strong>Email:</strong> <a href="mailto:danolatunji25@gmail.com">danolatunji25@gmail.com</a></p>
      <p><a href="https://www.linkedin.com/in/daniel-olatunji/" target="_blank" rel="noreferrer">LinkedIn</a> · <a href="https://github.com/oreoluwadaniel" target="_blank" rel="noreferrer">GitHub</a> · <a href="https://medium.com/@oluwafikayore" target="_blank" rel="noreferrer">Medium</a></p>
    </div>
    <ContactForm />
  </div></section></main>;
}