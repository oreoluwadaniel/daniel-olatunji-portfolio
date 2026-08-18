import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <strong>Daniel Olatunji</strong>
          <p className="small">Data Analyst | Business Intelligence Analyst</p>
          <p className="small">© 2026 Daniel Olatunji</p>
        </div>
        <div className="footer-links">
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
          <a href="https://www.linkedin.com/in/daniel-olatunji/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/oreoluwadaniel" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}