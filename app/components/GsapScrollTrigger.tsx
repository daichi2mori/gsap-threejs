"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  const scrollRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      const boxes: HTMLDivElement[] = gsap.utils.toArray(scrollRef.current.children);

      for (const box of boxes) {
        gsap.to(box, {
          x: 300,
          rotation: 360,
          borderRadius: "100%",
          scale: 2,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 50%",
            scrub: true,
          },
          ease: "power1.inOut",
        });
      }
    },
    { scope: scrollRef }
  );

  return (
    <div className="mt-24">
      <h2 className="text-xl">GsapScrollTrigger</h2>
      <div className="mt-5" ref={scrollRef}>
        <div id="scroll-pink" className="scroll-box w-20 h-20 rounded-lg bg-pink-500" />
        <div id="scroll-orange" className="scroll-box w-20 h-20 rounded-lg bg-orange-500" />
      </div>
    </div>
  );
};

export default GsapScrollTrigger;
