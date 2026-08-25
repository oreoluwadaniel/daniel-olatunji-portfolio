"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [["Work", "/work"], ["About", "/about"], ["Services", "/services"]];
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link className="brand" href="/">Daniel Olatunji</Link>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <Link className="btn btn-primary" href="/contact">Contact</Link>
        </nav>
        <button className="menu" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation">Menu</button>
      </div>
      {open && (
        <nav id="mobile-navigation" className="container" aria-label="Mobile navigation" style={{paddingBottom:18}}>
          <div className="card" style={{display:"grid", gap:10}}>
            {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
            <Link className="btn btn-primary" href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
