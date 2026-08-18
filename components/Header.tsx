 "use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [["Work", "/work"], ["About", "/about"], ["Experience", "/experience"], ["Services", "/services"], ["Contact", "/contact"]];
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link className="brand" href="/">Daniel Olatunji</Link>
        <nav className="nav-links">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <Link className="btn btn-primary" href="/contact">Let's Talk</Link>
        </nav>
        <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">Menu</button>
      </div>
      {open && (
        <div className="container" style={{paddingBottom:18}}>
          <div className="card" style={{display:"grid", gap:10}}>
            {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
            <Link className="btn btn-primary" href="/contact" onClick={() => setOpen(false)}>Let's Talk</Link>
          </div>
        </div>
      )}
    </header>
  );
}