import React from "react";

const Marquee = ({ children, className = "", pauseOnHover = false }) => {
  const items = React.Children.toArray(children);

  return (
    <div
      className={`tech-marquee relative overflow-hidden ${className}`}
      data-pause-on-hover={pauseOnHover ? "true" : "false"}
    >
      <div className="tech-marquee-track flex w-max min-w-full shrink-0 items-stretch gap-4 pr-4">
        {[...items, ...items]}
      </div>
    </div>
  );
};

export { Marquee };
