"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFromTo = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#red-box",
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
      },
      {
        x: 300,
        repeat: -1,
        yoyo: true,
        borderRadius: "100%",
        rotation: 360,
        duration: 1,
        ease: "bounce.out",
      }
    );
  }, []);

  return (
    <div className="mt-24">
      <h2 className="text-xl">GsapFrom</h2>
      <div className="mt-5">
        <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg" />
      </div>
    </div>
  );
};

export default GsapFromTo;
