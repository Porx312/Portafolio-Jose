import Meteors from "./meteors";
import React from "react";
import "./meteor.css"
export function MeteorDemo({children}) {
  return (
    <main id="meteor" className={" flex items-center justify-center overflow-hidden  border " }>
      <Meteors number={30} />
        {children}
    </main>
  );
}
