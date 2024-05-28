import "./animate.css"
"use client";

import { cn } from "../../lib/utils";
import { cssI,user, frontendx, htmlI, JsI, reactI, Tsi, github, git, vercel, page, backend, node, express, docker, azure, nextjs, nestjs, mongod, basededato, mysql } from "../../tools/icons";
import { AnimatedBeam } from "./animated-beam";
import React, { forwardRef, useRef } from "react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-[4rem] w-[4rem] items-center justify-center rounded-full border-2 bg-white p-[1rem] shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

export function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const divdockerRef = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div11Ref = useRef<HTMLDivElement>(null);
  const div12Ref = useRef<HTMLDivElement>(null);
  const div13Ref = useRef<HTMLDivElement>(null);
  const div14Ref = useRef<HTMLDivElement>(null);
  const div15Ref = useRef<HTMLDivElement>(null);
  const div16Ref = useRef<HTMLDivElement>(null);
  const div17Ref = useRef<HTMLDivElement>(null);
  const div18Ref = useRef<HTMLDivElement>(null);
  const div19Ref = useRef<HTMLDivElement>(null);
  const div20Ref = useRef<HTMLDivElement>(null);
  const divxdRef = useRef<HTMLDivElement>(null);
  const divbackendRef = useRef<HTMLDivElement>(null);
  const div21Ref = useRef<HTMLDivElement>(null);
  const div22Ref = useRef<HTMLDivElement>(null);
  const div23Ref = useRef<HTMLDivElement>(null);
  const div24Ref = useRef<HTMLDivElement>(null);
  const div25Ref = useRef<HTMLDivElement>(null);
  const divdataRef= useRef<HTMLDivElement>(null);
  const div26Ref = useRef<HTMLDivElement>(null);
  const div27Ref = useRef<HTMLDivElement>(null);
  return (
    <div
      className={cn(
        "custom  relative flex w-full items-center justify-center overflow-hidden rounded-lg  p-10 md:shadow-xl",
        className,
      )}
      ref={containerRef}
    >
        {/* frotend */}
      <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
           <img src={user} alt={user}  className="h-6 w-6" />
          </Circle>
        </div>
      
        <div className="flex flex-col justify-center">
          <Circle ref={divdockerRef} >
          <img src={page} alt={page}  className="h-6 w-6" />

          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div8Ref} >
          <img src={docker} alt={docker}  className="h-6 w-6" />

          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div11Ref}>
          <img src={github} alt={github}  className="h-6 w-6" />
          </Circle>
          <Circle ref={div12Ref}>
          <img src={git} alt={github}  className="h-6 w-6" />
          </Circle>
          <Circle ref={div13Ref}>
          <img src={vercel} alt={vercel}  className="h-6 w-6" />
          </Circle>
          <Circle ref={div14Ref}>
          <img src={azure} alt={azure}  className="h-6 w-6" />
          </Circle>
       
        </div>
      </div>
      {/* hosting */}
      <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
       
         
      <div className="flex flex-col justify-center">
       
       </div>
       <div className="flex flex-col justify-center">
         <Circle ref={divxdRef} >
         <img src={frontendx} alt={frontendx}  className="h-6 w-6" />
         </Circle>
       </div>
      
         <div className="flex flex-col justify-center gap-2">
          <Circle ref={div16Ref}>
          <img src={htmlI} alt={htmlI}  className="h-6 w-6" />
          </Circle>
          <Circle ref={div17Ref}>
          <img src={cssI} alt={cssI}  className="h-6 w-6" />
          </Circle>
          <Circle ref={div18Ref}>
          <img src={JsI} alt={JsI}  className="h-6 w-6" />
          </Circle>
          <Circle ref={div19Ref}>
          <img src={reactI} alt={reactI}  className="h-6 w-6" />
          </Circle>
          <Circle ref={div20Ref}>
          <img src={Tsi} alt={Tsi}  className="h-6 w-6" />
          </Circle>
        </div>
       </div>
      {/* backend */}
      <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
       
        <div className="flex flex-col justify-center">
       
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={divbackendRef} >
          <img src={backend} alt={backend}  className="h-6 w-6" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div21Ref}>
          <img src={node} alt={node}  className="h-6 w-6" />
          </Circle>
          <Circle ref={div22Ref}>
          <img src={express} alt={express}  className="h-6 w-6" />
          </Circle>
          <Circle ref={div23Ref}>
          <img src={nextjs} alt={nextjs}  className="h-6 w-6" />
          </Circle>
          <Circle ref={div24Ref}>
          <img src={nestjs} alt={nestjs}  className="h-6 w-6" />
          </Circle>
          <Circle ref={div25Ref}>
          <img src={Tsi} alt={Tsi}  className="h-6 w-6" />
          </Circle>
        </div>
      </div>
      {/* base datos */}
      <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
       
       
      <div className="flex flex-col justify-center">
       
       </div>
       <div className="flex flex-col justify-center">
         <Circle ref={divdataRef} >
         <img src={basededato} alt={basededato}  className="h-6 w-6" />
         </Circle>
       </div>
       <div className="flex flex-col justify-center gap-2">
         <Circle ref={div26Ref}>
         <img src={mongod} alt={mongod}  className="h-6 w-6" />
         </Circle>
         <Circle ref={div27Ref}>
         <img src={mysql} alt={mysql}  className="h-6 w-6" />
         </Circle>
       </div>
     </div>
   

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
      />
           <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={divdockerRef}
        duration={3}
      />
          <AnimatedBeam
        containerRef={containerRef}
        fromRef={divdockerRef}
        toRef={div8Ref}
        duration={3}
      />
     
     <AnimatedBeam
        containerRef={containerRef}
        fromRef={div11Ref}
        toRef={div8Ref}
        duration={3}
      />
          <AnimatedBeam
        containerRef={containerRef}
        fromRef={div12Ref}
        toRef={div8Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div13Ref}
        toRef={div8Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div14Ref}
        toRef={div8Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div15Ref}
        toRef={div8Ref}
        duration={3}
      />
      {/* frontend */}
    
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div11Ref}
        toRef={divxdRef}
        duration={3}
      />
        <AnimatedBeam
        containerRef={containerRef}
        fromRef={div12Ref}
        toRef={divxdRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div13Ref}
        toRef={divxdRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div14Ref}
        toRef={divxdRef}
        duration={3}
      />
     
        {/* frontend app */}
        <AnimatedBeam
        containerRef={containerRef}
        fromRef={div16Ref}
        toRef={divxdRef}
        duration={3}
      />
        <AnimatedBeam
        containerRef={containerRef}
        fromRef={div17Ref}
        toRef={divxdRef}
        duration={3}
      />
        <AnimatedBeam
        containerRef={containerRef}
        fromRef={div18Ref}
        toRef={divxdRef}
        duration={3}
      />
        <AnimatedBeam
        containerRef={containerRef}
        fromRef={div19Ref}
        toRef={divxdRef}
        duration={3}
      />
        <AnimatedBeam
        containerRef={containerRef}
        fromRef={div20Ref}
        toRef={divxdRef}
        duration={3}
      />
      {/* backend */}
     
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div16Ref}
        toRef={divbackendRef}
        duration={3}
      />
        <AnimatedBeam
        containerRef={containerRef}
        fromRef={div17Ref}
        toRef={divbackendRef}
        duration={3}
      />
        <AnimatedBeam
        containerRef={containerRef}
        fromRef={div18Ref}
        toRef={divbackendRef}
        duration={3}
      />
        <AnimatedBeam
        containerRef={containerRef}
        fromRef={div19Ref}
        toRef={divbackendRef}
        duration={3}
      />
        <AnimatedBeam
        containerRef={containerRef}
        fromRef={div20Ref}
        toRef={divbackendRef}
        duration={3}
      />
      {/* backend conecction */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div21Ref}
        toRef={divbackendRef}
        duration={3}
      />
        <AnimatedBeam
        containerRef={containerRef}
        fromRef={div22Ref}
        toRef={divbackendRef}
        duration={3}
      />
        <AnimatedBeam
        containerRef={containerRef}
        fromRef={div23Ref}
        toRef={divbackendRef}
        duration={3}
      />
        <AnimatedBeam
        containerRef={containerRef}
        fromRef={div24Ref}
        toRef={divbackendRef}
        duration={3}
      />
        <AnimatedBeam
        containerRef={containerRef}
        fromRef={div25Ref}
        toRef={divbackendRef}
        duration={3}
      />
      {/* base de dato */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div21Ref}
        toRef={divdataRef}
        duration={3}
      />
        <AnimatedBeam
        containerRef={containerRef}
        fromRef={div22Ref}
        toRef={divdataRef}
        duration={3}
      />
        <AnimatedBeam
        containerRef={containerRef}
        fromRef={div23Ref}
        toRef={divdataRef}
        duration={3}
      />
        <AnimatedBeam
        containerRef={containerRef}
        fromRef={div24Ref}
        toRef={divdataRef}
        duration={3}
      />
        <AnimatedBeam
        containerRef={containerRef}
        fromRef={div25Ref}
        toRef={divdataRef}
        duration={3}
      />
      {/* database */}
              <AnimatedBeam
        containerRef={containerRef}
        fromRef={divdataRef}
        toRef={div26Ref}
        duration={2}
      />
              <AnimatedBeam
        containerRef={containerRef}
        fromRef={divdataRef}
        toRef={div27Ref}
        duration={2}
      />
    </div>
  );
}
