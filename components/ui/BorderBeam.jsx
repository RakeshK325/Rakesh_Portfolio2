import React from "react";

const BorderBeam = ({
  duration = 4,
  size = 300,
  reverse = false,
  className = "",
}) => {
  const beamAngle = Math.min(120, Math.max(42, size / 3));

  return (
    <span
      aria-hidden="true"
      className={`border-beam ${className}`}
      style={{
        "--border-beam-duration": `${duration}s`,
        "--border-beam-angle": `${beamAngle}deg`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    />
  );
};

export { BorderBeam };
