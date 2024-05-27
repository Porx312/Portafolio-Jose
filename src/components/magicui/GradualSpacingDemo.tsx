import GradualSpacing from "./gradual-spacing";
import React from "react";

export async function GradualSpacingDemo({name}) {
  return (
    <GradualSpacing
      className="font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem]"
      text={name}
    />
  );
}
