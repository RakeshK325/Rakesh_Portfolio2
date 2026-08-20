import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PATH_D =
  "M1588 1052.5C1563.5 1002.5 1503.4 1295.7 1413 1288.5C1300 1279.5 1318.5 976.5 1145.5 942.5C972.5 908.501 1011.5 1109.5 827 1142.5C642.5 1175.5 640.5 963.5 366 804C146.4 676.4 73.1667 792.5 64 866.5C65.5 916.5 106.8 1011.8 260 993C396 976.311 647.5 927.5 677.5 547.5C707.5 167.5 246.5 -47 82.5 66C-81.5 179 -189.5 31.5 -189.5 31.5";

const Skiggle = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 88%", "end 16%"],
    layoutEffect: false,
  });

  // Normalize the SVG path with pathLength="1" so the animation is not tied
  // to a hard-coded pixel length. The line therefore stays reliable when the
  // about section grows to include the profile, education, and services copy.
  const dashOffset = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div
      ref={sectionRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <svg
        className="absolute left-1/2 top-[-10%] h-full w-[120vw] -translate-x-1/2"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1600 1325"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d={PATH_D}
          pathLength="1"
          stroke="url(#rakesh-scroll-line-gradient)"
          strokeDasharray="1"
          strokeLinecap="round"
          strokeWidth="50"
          style={{ strokeDashoffset: dashOffset }}
        />
        <defs>
          <linearGradient
            id="rakesh-scroll-line-gradient"
            x1="35"
            y1="-17"
            x2="605"
            y2="444"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-accent)" />
            <stop offset="1" stopColor="var(--color-accent)" stopOpacity="0.62" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Skiggle;
