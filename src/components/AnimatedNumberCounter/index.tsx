"use client";
import { ComponentProps, useEffect, useState } from "react";

import { useSpring } from "motion/react";

type Props = ComponentProps<"span"> & {
  to: number;
  from?: number;
  duration?: number;
};

export default function AnimatedNumberCounter({
  to,
  from = 0,
  duration = 1000,
  ...props
}: Props) {
  const [count, setCount] = useState(from);

  const springSubCount = useSpring(from, {
    bounce: 0,
    duration
  });

  springSubCount.on("change", (value) => {
    setCount(Math.round(value));
  });

  useEffect(() => {
    springSubCount.set(to);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [to]);

  return <span {...props}>{count}</span>;
}
