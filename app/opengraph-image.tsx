import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          gap: 28,
          background: "#050505",
          color: "#f5f5f5",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 15,
            letterSpacing: 6,
            color: "#a5a5a5",
            fontWeight: 600,
          }}
        >
          PRIVATE ACCESS
        </div>
        <div
          style={{
            fontSize: 108,
            fontWeight: 700,
            letterSpacing: -2,
            display: "flex",
          }}
        >
          {site.name}
        </div>
        <div style={{ fontSize: 22, color: "#a5a5a5", display: "flex" }}>
          CHINA &nbsp;•&nbsp; DUBAI &nbsp;•&nbsp; WORLDWIDE
        </div>
      </div>
    ),
    { ...size }
  );
}
