"use client";

import { AnimatedBeam } from "./animated-beam";
import React, { useRef } from "react";

export default function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-full justify-between"
    >
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
      />
      <div
        ref={div1Ref}
        className="z-10 h-10 w-10 rounded-full bg-white shadow-xl"
      />
      <div
        ref={div2Ref}
        className="z-10 h-10 w-10 rounded-full bg-white shadow-xl"
      />
    </div>
  );
}
