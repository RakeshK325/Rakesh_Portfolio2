import React from "react";
import { Trail } from "./TrailText";

const Header = () => {
  return (
    <div
      className="relative z-20 w-full px-4 font-semibold text-5xl leading-[0.95] sm:text-6xl md:px-0 md:pl-6 md:text-[9rem] md:leading-none"
      style={{ letterSpacing: "-0.07em" }}
    >
      <Trail>
        <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-start">
          <div>Building&nbsp;</div>
          <div>Real&nbsp;</div>
        </div>
        <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-start">
          <div>Digital&nbsp;</div>
          <div>Systems&nbsp;</div>
        </div>
      </Trail>
      <p className="mt-6 px-4 text-center text-base font-normal leading-relaxed tracking-normal md:max-w-3xl md:px-0 md:text-left md:text-2xl">
        Building Scalable Web Platforms, AI Systems, and Enterprise Applications.
      </p>
    </div>
  );
};

export default Header;
