import Link from "next/link";

export default function NotFound() {
  return <main><section className="section"><div className="container"><div className="eyebrow">404</div><h1>That page is not here.</h1><p className="lead">A few project pages were retired when the portfolio was cut back to the five strongest cases. Everything current sits on one page.</p><div className="actions"><Link className="btn btn-primary" href="/work">See the five projects</Link><Link className="btn btn-secondary" href="/">Back home</Link></div></div></section></main>;
}
