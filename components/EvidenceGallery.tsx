"use client";

import { useRef, useState } from "react";
import type { EvidenceImage } from "@/lib/case-evidence";

export default function EvidenceGallery({ items }: { items: EvidenceImage[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<EvidenceImage | null>(null);
  const [overview, ...rest] = items;

  function open(item: EvidenceImage) {
    setActive(item);
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
    setActive(null);
  }

  function tile(item: EvidenceImage, featured: boolean) {
    return (
      <figure className={featured ? "evidence-tile evidence-featured" : "evidence-tile"} key={item.src} style={featured ? { maxWidth: Math.max(item.width * 1.2, 720) } : undefined}>
        <button type="button" className="evidence-open" onClick={() => open(item)} aria-label={`Enlarge image: ${item.alt}`}>
          <img src={item.src} alt={item.alt} width={item.width} height={item.height} loading="lazy" decoding="async" />
        </button>
        <figcaption>{item.caption}</figcaption>
      </figure>
    );
  }

  return (
    <>
      <div className="evidence-gallery">
        {tile(overview, true)}
        {rest.length > 0 && <div className={rest.length === 1 ? "evidence-grid single" : "evidence-grid"}>{rest.map((i) => tile(i, false))}</div>}
      </div>
      <dialog ref={dialogRef} className="evidence-dialog" onClose={() => setActive(null)} onClick={(e) => { if (e.target === dialogRef.current) close(); }} aria-label="Enlarged project image">
        {active && (
          <div className="evidence-dialog-inner">
            <button type="button" className="evidence-close" onClick={close} aria-label="Close enlarged image">Close</button>
            <img src={active.src} alt={active.alt} />
            <p>{active.caption}</p>
          </div>
        )}
      </dialog>
    </>
  );
}
