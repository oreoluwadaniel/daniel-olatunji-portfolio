import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <strong>Daniel Olatunji</strong>
          <p className="small">Senior Data Analyst | Power BI Developer</p>
          <p className="small">© 2026 Daniel Olatunji</p>
        </div>
        <div className="footer-links">
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
          <a href="https://medium.com/@oluwafikayore" target="_blank" rel="noreferrer">Medium</a>
          <a href="https://github.com/oreoluwadaniel" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}