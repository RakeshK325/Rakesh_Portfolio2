import React from "react";
import { a, useTrail } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

export const Trail = ({ children, ...props }) => {
  const items = React.Children.toArray(children);
  const [ref, open] = useInView({ rootMargin: "-50px 0px", triggerOnce: true });
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1000, friction: 200 },
    opacity: open ? 1 : 0,
    y: open ? 0 : 20,
    height: open ? 140 : 0,
    from: { opacity: 0, y: 20, height: 0 },
  });

  return (
    <div {...props} ref={ref}>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};
