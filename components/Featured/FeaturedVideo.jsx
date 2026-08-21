import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import featuredImage from "../../Rakesh_photo.png";
import { BorderBeam } from "../ui/BorderBeam";

const FeaturedVideo = ({refForward, ...props }) => {
  const ref = useRef(null);

  const variants = {
    initial: { scale: 1, x: 0, y: 0 },
    animate: { scale: 1.02, x: 0, y: 0 },
  };

  const { scrollYProgress } = useScroll({
    target: refForward,
    layoutEffect: false,
  });

  const [progress, setProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setProgress(value);
  });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      animate={progress > 0.5 ? "animate" : "initial"}
      className="relative z-30 mx-auto mt-4 w-[72vw] max-w-[18rem] self-start overflow-hidden rounded-3xl aspect-[3/4] md:col-start-1 md:row-start-2 md:mt-0 md:ml-4 md:w-[84%] md:max-w-[620px] md:aspect-[3/4]"
      {...props}
    >
      <Image
        src={featuredImage}
        alt="Featured portrait"
        fill
        priority
        sizes="(max-width: 768px) 80vw, 40vw"
        className="object-cover"
      />
      <BorderBeam
        duration={4}
        size={300}
        reverse
        className="from-transparent via-green-500 to-transparent"
      />
      </motion.div>
  );
};

export default FeaturedVideo;
