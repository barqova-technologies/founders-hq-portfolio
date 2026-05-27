"use client";

// Catches errors in the root layout itself. It replaces the whole document,
// so styles are inlined (Tailwind/global CSS are not guaranteed here).
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0b0c",
          color: "#f5f5f5",
          fontFamily: "system-ui, sans-serif",
          padding: "2rem",
        }}
      >
        <div style={{ maxWidth: 520, textAlign: "center" }}>
          <p
            style={{
              fontSize: 12,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              opacity: 0.6,
              margin: 0,
            }}
          >
            Something broke
          </p>
          <h1 style={{ fontSize: 40, fontWeight: 700, margin: "1.25rem 0 0" }}>
            A wire came loose.
          </h1>
          <p style={{ opacity: 0.7, marginTop: "1rem", lineHeight: 1.6 }}>
            That is on us, not you. Try again, and if it keeps happening let us
            know.
          </p>
          <button
            onClick={reset}
            style={{
              marginTop: "2rem",
              padding: "0.75rem 1.5rem",
              borderRadius: 999,
              border: "none",
              background: "#f5f5f5",
              color: "#0b0b0c",
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
