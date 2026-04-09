import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { POPEYE } from "../magazine-styles";

interface CardProps {
  durationInFrames: number;
}

export const Card07: React.FC<CardProps> = ({ durationInFrames }) => {
  const frame = useCurrentFrame();

  const TITLE_IN = 15;
  const BODY_IN = 24;
  const FADE_OUT = 15;

  const titleOpacity = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [TITLE_IN, TITLE_IN + 12], [30, 0], { extrapolateRight: "clamp" });
  const bodyOpacity = interpolate(frame, [BODY_IN, BODY_IN + 12], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - FADE_OUT, durationInFrames], [1, 0], { extrapolateLeft: "clamp" });

  const bloomData = [
    { region: "제주 · 부산 · 진해", date: "3월 25일" },
    { region: "경주 · 전주", date: "3월 28일" },
    { region: "서울 · 인천", date: "4월 3일" },
  ];

  const tips = [
    "피크 블룸은 첫 개화 후 약 7일",
    "인기 명소 숙소는 6개월 전 예약",
    "이른 아침 방문으로 인파 피하기",
  ];

  return (
    <AbsoluteFill
      style={{
        opacity: fadeOut,
        background: POPEYE.colors.background,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "80px 72px",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 56, opacity: titleOpacity, transform: `translateY(${titleY}px)` }}>
        <div
          style={{
            display: "inline-block",
            background: "#D4563A",
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 6,
            paddingBottom: 6,
            marginBottom: 24,
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
            2026 Guide
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: 56,
            lineHeight: 1.15,
            color: POPEYE.colors.primary,
          }}
        >
          개화 일정 &
          <br />
          벚꽃 꿀팁
        </h2>
      </div>

      {/* Bloom schedule */}
      <div style={{ marginBottom: 48, opacity: bodyOpacity }}>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: 28,
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
            color: POPEYE.colors.muted,
            marginBottom: 20,
          }}
        >
          개화 일정
        </p>

        {bloomData.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 18,
              paddingBottom: 18,
              borderBottom: `1px solid ${POPEYE.colors.cream}`,
            }}
          >
            <span
              style={{
                fontFamily: "'Noto Sans KR', sans-serif",
                fontWeight: 400,
                fontSize: 34,
                color: POPEYE.colors.primary,
              }}
            >
              {item.region}
            </span>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: 34,
                color: "#D4563A",
              }}
            >
              {item.date}
            </span>
          </div>
        ))}
      </div>

      {/* Tips */}
      <div style={{ opacity: bodyOpacity }}>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: 28,
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
            color: POPEYE.colors.muted,
            marginBottom: 20,
          }}
        >
          꿀팁
        </p>

        {tips.map((tip, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 18,
              marginBottom: 20,
            }}
          >
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: 30,
                color: "#D4563A",
                minWidth: 32,
                paddingTop: 2,
              }}
            >
              {i + 1}
            </span>
            <span
              style={{
                fontFamily: "'Noto Sans KR', sans-serif",
                fontWeight: 400,
                fontSize: 32,
                lineHeight: 1.5,
                color: POPEYE.colors.primary,
              }}
            >
              {tip}
            </span>
          </div>
        ))}
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
          color: "rgba(0,0,0,0.3)",
        }}
      >
        7 / 7
      </div>
    </AbsoluteFill>
  );
};
