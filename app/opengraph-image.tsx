import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Founder's HQ - Build. Connect. Scale. Repeat.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated social share image — real brand mark on the ink background.
export default async function OpengraphImage() {
  const logo = await fetch(
    new URL("../public/foundershq_dark.png", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
          background: "#0A0A0A",
          color: "#FAFAFA",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          // @ts-expect-error - ArrayBuffer is a valid src for next/og ImageResponse
          src={logo}
          alt="Founder's HQ"
          width={360}
          height={268}
        />

        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: -1,
            color: "#FAFAFA",
          }}
        >
          Build. Connect. Scale. Repeat.
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#9A9A9A",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Cohort 01 · Lucknow · Launching 2026
        </div>
      </div>
    ),
    { ...size }
  );
}
