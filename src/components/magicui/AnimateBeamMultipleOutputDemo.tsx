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
        "item-circle z-10 flex items-center justify-center rounded-full border-2 bg-white p-[1rem] shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
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
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);
  const div10Ref = useRef<HTMLDivElement>(null);
  const div11Ref = useRef<HTMLDivElement>(null);
  const div12Ref = useRef<HTMLDivElement>(null);
  const div13Ref = useRef<HTMLDivElement>(null);
  const div14Ref = useRef<HTMLDivElement>(null);
  const div15Ref = useRef<HTMLDivElement>(null);
  const div16Ref = useRef<HTMLDivElement>(null);

  const divbackendRef = useRef<HTMLDivElement>(null);
  const divfrontendRef = useRef<HTMLDivElement>(null);
  const divdatabaseRef = useRef<HTMLDivElement>(null);
  const divdockerRef = useRef<HTMLDivElement>(null);
  const divuserRef = useRef<HTMLDivElement>(null);
  const divtoolsRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "skill relative flex w-full items-center justify-center overflow-hidden rounded-lg  p-10 md:shadow-xl",
        className,
      )}
      ref={containerRef}
    >
    <div className="skillitemmain flex h-full w-full flex-row items-stretch justify-between gap-10">
        
    <Circle ref={divuserRef}>
    <img src={user} alt={user}  className="h-6 w-6" />
    </Circle>
  
</div>
<div className="skillitemmain flex h-full w-full flex-row items-stretch justify-between gap-10">
        
        <Circle ref={divdockerRef}>
        <img src={docker} alt={docker}  className="h-6 w-6" />
        </Circle>
      
    </div>

      <div className="skillitem flex h-full w-full flex-row items-stretch justify-between gap-10">
     
          <Circle ref={div1Ref}>
          <img src={github} alt={github}  className="h-6 w-6" />
          </Circle>
          <Circle ref={div2Ref}>
          <img src={git} alt={github}  className="h-6 w-6" />
          </Circle>
          <Circle ref={div3Ref}>
          <img src={vercel} alt={vercel}  className="h-6 w-6" />
          </Circle>
          <Circle ref={div4Ref}>
          <img src={azure} alt={azure}  className="h-6 w-6" />
          </Circle>
  
      </div>
      <div className="skillitemmain flex h-full w-full flex-row items-stretch justify-between gap-10">
      
       <Circle ref={divfrontendRef}>
       <img src={frontendx} alt={frontendx}  className="h-6 w-6" />
       </Circle>
     
   </div>
      <div className="skillitem flex h-full w-full flex-row items-stretch justify-between gap-10">
       
         
  
      
          <div className="skillitemXD">
          <Circle ref={div5Ref}>
          <img src={htmlI} alt={htmlI}  className="h-6 w-6" />
          </Circle>
          <Circle ref={div6Ref}>
          <img src={cssI} alt={cssI}  className="h-6 w-6" />
          </Circle>
          <Circle ref={div7Ref}>
          <img src={JsI} alt={JsI}  className="h-6 w-6" />
          </Circle>
          <Circle ref={div8Ref}>
          <img src={reactI} alt={reactI}  className="h-6 w-6" />
          </Circle>
            <Circle ref={div9Ref}>
          <img src={Tsi} alt={Tsi}  className="h-6 w-6" />
          </Circle>
          </div>
        
        </div>
      {/* backend */}
      <div className="skillitemmain flex h-full w-full flex-row items-stretch justify-between gap-10">
       
      
       <Circle ref={divbackendRef}>
       <img src={backend} alt={backend}  className="h-6 w-6" />
       </Circle>
     
   </div>
      <div className="skillitem flex h-full w-full flex-row items-stretch justify-between gap-10">
       
     
       
      <div className="skillitemXD">
          <Circle ref={div10Ref}>
          <img src={node} alt={node}  className="h-6 w-6" />
          </Circle>
          <Circle ref={div11Ref}>
          <img src={express} alt={express}  className="h-6 w-6" />
          </Circle>
          <Circle ref={div12Ref}>
          <img src={nextjs} alt={nextjs}  className="h-6 w-6" />
          </Circle>
          <Circle ref={div13Ref}>
          <img src={nestjs} alt={nestjs}  className="h-6 w-6" />
          </Circle>
          <Circle ref={div14Ref}>
          <img src={Tsi} alt={Tsi}  className="h-6 w-6" />
          </Circle>
      </div>
      </div>
      {/* base datos */}
      <div className="skillitemmain flex h-full w-full flex-row items-stretch justify-between gap-10">
       
       
       
        
       <Circle ref={divdatabaseRef}>
       <img src={basededato} alt={basededato}  className="h-6 w-6" />
       </Circle>
     
   </div>
      <div className="skillitem flex h-full w-full flex-row items-stretch justify-between gap-10">
       
       
       
        
         <Circle ref={div15Ref}>
         <img src={mongod} alt={mongod}  className="h-6 w-6" />
         </Circle>
         <Circle ref={div16Ref}>
         <img src={mysql} alt={mysql}  className="h-6 w-6" />
         </Circle>
     </div>
     {/* animatedocker */}
     <AnimatedBeam
        containerRef={containerRef}
        fromRef={divuserRef}
        toRef={divdockerRef}
        duration={3}
      />
     <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={divdockerRef}
        duration={3}
      />
       <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={divdockerRef}
        duration={3}
      />
       <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={divdockerRef}
        duration={3}
      />
       <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={divdockerRef}
        duration={3}
      />

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={divfrontendRef}
        duration={3}
      />
       <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={divfrontendRef}
        duration={3}
      />
       <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={divfrontendRef}
        duration={3}
      />
       <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={divfrontendRef}
        duration={3}
      />
      {/* frontend */}
           <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={divfrontendRef}
        duration={3}
      />
       <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={divfrontendRef}
        duration={3}
      />
       <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={divfrontendRef}
        duration={3}
      />
       <AnimatedBeam
        containerRef={containerRef}
        fromRef={div8Ref}
        toRef={divfrontendRef}
        duration={3}
      />
       <AnimatedBeam
        containerRef={containerRef}
        fromRef={div9Ref}
        toRef={divfrontendRef}
        duration={3}
      />
          <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={divbackendRef}
        duration={3}
      />
         <AnimatedBeam
        containerRef={containerRef}
        fromRef={divbackendRef}
        toRef={divuserRef}
        duration={4}
      />
          <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={divbackendRef}
        duration={3}
      />
         <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={divbackendRef}
        duration={3}
      />
         <AnimatedBeam
        containerRef={containerRef}
        fromRef={div8Ref}
        toRef={divbackendRef}
        duration={3}
      />
         <AnimatedBeam
        containerRef={containerRef}
        fromRef={div9Ref}
        toRef={divbackendRef}
        duration={3}
      />
   {/* backend */}
   <AnimatedBeam
        containerRef={containerRef}
        fromRef={div10Ref}
        toRef={divbackendRef}
        duration={3}
      />
     <AnimatedBeam
        containerRef={containerRef}
        fromRef={div11Ref}
        toRef={divbackendRef}
        duration={3}
      />
          <AnimatedBeam
        containerRef={containerRef}
        fromRef={div12Ref}
        toRef={divbackendRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div13Ref}
        toRef={divbackendRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div14Ref}
        toRef={divbackendRef}
        duration={3}
      />
      {/* fin */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div10Ref}
        toRef={divdatabaseRef}
        duration={3}
      />
     <AnimatedBeam
        containerRef={containerRef}
        fromRef={div11Ref}
        toRef={divdatabaseRef}
        duration={3}
      />
          <AnimatedBeam
        containerRef={containerRef}
        fromRef={div12Ref}
        toRef={divdatabaseRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div13Ref}
        toRef={divdatabaseRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div14Ref}
        toRef={divdatabaseRef}
        duration={3}
      />
   
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div15Ref}
        toRef={divdatabaseRef }
        duration={3}
      />
        <AnimatedBeam
        containerRef={containerRef}
        fromRef={div16Ref }
        toRef={divdatabaseRef}
        duration={3}
      />
      {/* frontend */}
    
  
     
        {/* frontend app */}
    
      {/* backend */}
     
    
    </div>
  );
}
