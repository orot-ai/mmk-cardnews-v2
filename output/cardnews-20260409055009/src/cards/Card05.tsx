import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { POPEYE } from "../magazine-styles";

interface CardProps {
  durationInFrames: number;
}

export const Card05: React.FC<CardProps> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  const FADE_IN = 9;
  const TITLE_IN = 15;
  const BODY_IN = 24;
  const FADE_OUT = 15;

  const bgOpacity = interpolate(frame, [0, FADE_IN], [0, 1], { extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [30, 0], { extrapolateRight: "clamp" });
  const bodyOpacity = interpolate(frame, [BODY_IN, BODY_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - FADE_OUT, durationInFrames], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ opacity: fadeOut, background: "#0A0A0A" }}>
      <Img
        src={staticFile("card-05.png")}
        style={{ width: "100%", height: "100%", objectFit: "cover", opacity: bgOpacity }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: POPEYE.overlay.content,
        }}
      />

      {/* Location badge */}
      <div
        style={{
          position: "absolute",
          top: 72,
          left: 72,
          opacity: bodyOpacity,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div
          style={{
            background: "#D4563A",
            paddingLeft: 14,
            paddingRight: 14,
            paddingTop: 5,
            paddingBottom: 5,
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: 26,
              letterSpacing: "0.12em",
              textTransform: "uppercase" as const,
              color: "#FFFFFF",
            }}
          >
            04
          </span>
        </div>
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            fontSize: 28,
            letterSpacing: "0.1em",
            color: "rgba(255,255,255,0.6)",
            textTransform: "uppercase" as const,
          }}
        >
          Jeju Island
        </span>
      </div>

      {/* Bottom content */}
      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: 72,
          right: 72,
        }}
      >
        <h2
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: 60,
            lineHeight: 1.15,
            color: "#FFFFFF",
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            marginBottom: 20,
          }}
        >
          제주도
        </h2>

        <p
          style={{
            fontFamily: "'Noto Sans KR', sans-serif",
            fontWeight: 400,
            fontSize: 36,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.85)",
            opacity: bodyOpacity,
            marginBottom: 20,
          }}
        >
          왕벚나무의 고향
        </p>

        <p
          style={{
            fontFamily: "'Noto Sans KR', sans-serif",
            fontWeight: 400,
            fontSize: 32,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.65)",
            opacity: bodyOpacity,
          }}
        >
          한국에서 가장 먼저 피는 벚꽃.
          <br />
          제주 왕벚나무는 한국 자생종으로
          <br />
          국내 최대 꽃송이를 자랑한다.
        </p>
      </div>

      {/* Page number */}
      <div
        style={{
          position: "absolute",
          bottom: 48,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 28,
          fontWeight: 300,
          letterSpacing: 3,
          color: "rgba(255,255,255,0.4)",
        }}
      >
        5 / 7
      </div>
    </AbsoluteFill>
  );
};
