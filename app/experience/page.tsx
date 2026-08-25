import Link from "next/link";

export default function ExperiencePage() {
  return <main><section className="section"><div className="container copy"><div className="eyebrow">Experience</div><h1>Experience is covered in my CV.</h1><p className="lead">For a full record of my roles, responsibilities and employment history, download my CV.</p><div className="actions" style={{marginTop:30}}><a className="btn btn-primary" href="/cv/Daniel_Olatunji_CV.pdf" download>Download CV</a><Link className="btn btn-secondary" href="/work">See the work</Link></div></div></section></main>;
}
