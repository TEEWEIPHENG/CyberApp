import React from "react";

const Loading = ({
  fullscreen = false,
  message = "Loading...",
  size = 40,
  stroke = 4,
  ariaLabel = "Loading",
}) => {
  const spinner = (
    <div
      role="status"
      aria-label={ariaLabel}
      aria-live="polite"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        border: `${stroke}px solid rgba(0,0,0,0.15)`,
        borderTopColor: "currentColor",
        animation: "spin 0.8s linear infinite",
      }}
    />
  );

  if (fullscreen) {
    return (
      <div style={overlayStyle}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
          {spinner}
          <span style={{ fontSize: 14, opacity: 0.8 }}>{message}</span>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      {spinner}
      {message && <span style={{ fontSize: 14, opacity: 0.8 }}>{message}</span>}
      <style>{keyframes}</style>
    </div>
  );
};

const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(255,255,255,0.7)",
  backdropFilter: "blur(2px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
};

const keyframes = `
@keyframes spin {
  to { transform: rotate(360deg); }
}
`;

export default Loading;
