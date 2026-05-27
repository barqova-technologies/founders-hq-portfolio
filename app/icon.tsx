import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Generated favicon - the "FHQ" mark on the brand ink background.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0A",
          color: "#FAFAFA",
          fontSize: 18,
          fontWeight: 700,
          borderRadius: 7,
        }}
      >
        F
      </div>
    ),
    { ...size }
  );
}
