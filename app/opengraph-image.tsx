import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Founder's HQ - Where founders find their people.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated social share image (no static asset needed).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0A",
          color: "#FAFAFA",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#9A9A9A",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#FAFAFA",
              color: "#0A0A0A",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            FHQ
          </div>
          Founder&rsquo;s HQ
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 78,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 900,
          }}
        >
          Where founders find their people.
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#B8B8B8",
            letterSpacing: 2,
          }}
        >
          Cohort 01 · Lucknow · Launching 2026
        </div>
      </div>
    ),
    { ...size }
  );
}
