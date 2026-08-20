import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Daniel Olatunji, Data Analyst and Business Intelligence Analyst";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0a1424", padding: "72px 80px", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", color: "#caa85e", fontSize: 26, letterSpacing: 4, fontWeight: 700 }}>DATA ANALYST · BUSINESS INTELLIGENCE · LAGOS</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", color: "#f3f1ea", fontSize: 82, fontWeight: 700 }}>Daniel Olatunji</div>
          <div style={{ display: "flex", color: "#9eabbc", fontSize: 36, marginTop: 18 }}>I find out why the numbers moved, and what to do about it.</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", width: 64, height: 4, background: "#caa85e" }} />
          <div style={{ display: "flex", color: "#d8dee7", fontSize: 26 }}>Five case studies, with the numbers behind each one</div>
        </div>
      </div>
    ),
    size
  );
}
