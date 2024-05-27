import Meteors from "./meteors";
import React from "react";
import "./meteor.css"
export function MeteorDemo({children,idx,classid}) {
  return (
    <section id={idx} className={`${classid} meteor overflow-hidden  border `  }>
      <Meteors number={30} />
        {children}
    </section>
  );
}
