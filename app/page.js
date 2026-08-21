"use client";
import { Suspense, useRef, useEffect } from "react";
import FeaturedVideo from "@/components/Featured/FeaturedVideo";
import Header from "@/components/Featured/Header";
import SubHeader from "@/components/Featured/SubHeader";
import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import SmoothScroll from "@/components/SmoothScroll";
import GradualBlur from "@/components/GradualBlur/GradualBlur";
import { MarqueeDemo } from "@/components/MarqueeDemo/MarqueeDemo";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import ProfileDetails from "@/components/ProfileDetails/ProfileDetails";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const ref = useRef(null);
  const blurRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    console.clear();
    console.log(
      "%cRAKESH K | FULL-STACK & AI SYSTEMS DEVELOPER",
      "background: #D9E6FF; color: #0f172a; font-size: 16px; font-weight: 800; padding: 10px 16px; border-radius: 10px; letter-spacing: 2px;"
    );
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const blur = blurRef.current;
    const footer = document.getElementById("main-footer");
    if (!blur || !footer) return;

    // The GradualBlur effect should be visible across the whole site, but
    // disabled while the footer is on screen — the footer is the one
    // component that opts out of the blur. Compute the initial visibility
    // from the footer's current viewport position so a hard reload anywhere
    // on the page lands in the correct state, then keep it in sync as the
    // user scrolls past the footer in either direction.
    const setVisible = (visible) =>
      gsap.to(blur, { autoAlpha: visible ? 1 : 0, duration: 0.3 });

    const footerInView = footer.getBoundingClientRect().top < window.innerHeight;
    gsap.set(blur, { autoAlpha: footerInView ? 0 : 1 });

    const trigger = ScrollTrigger.create({
      trigger: footer,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => setVisible(false),
      onEnterBack: () => setVisible(false),
      onLeave: () => setVisible(false),
      onLeaveBack: () => setVisible(true),
    });

    return () => trigger.kill();
  }, []);

  return (
    <SmoothScroll>
    <Suspense
      fallback={
        <div className="w-screen bg-black h-screen text-white text-4xl md:text-7xl lg:text-9xl flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <div className="bg-bg text-fg h-auto w-screen overflow-x-hidden">
        <Navbar />

        <HeroSection />
        <div
          id="about"
          className="relative mt-16 flex h-auto flex-col gap-8 pb-16 md:mt-[10rem] md:min-h-[140vh] md:grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:grid-rows-[auto_1fr] md:gap-x-8 md:gap-y-12 md:pb-20"
          ref={ref}
        >
          <div className="relative z-20 md:col-span-2 md:row-start-1">
            <Header />
          </div>
          <FeaturedVideo refForward={ref} />
          <SubHeader />
        </div>

        <Projects />

        <ProfileDetails />

        <MarqueeDemo />
        <Contact />
        <SiteFooter />

        {/* GradualBlur — hidden when footer is in view */}
        <div
          ref={blurRef}
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 99999,
          }}
        >
          <GradualBlur
            target="parent"
            position="bottom"
            height="6rem"
            strength={2}
            divCount={6}
            curve="bezier"
            exponential={false}
            opacity={0.9}
            zIndex={1}
          />
        </div>
      </div>
    </Suspense>
    </SmoothScroll>
  );
}
