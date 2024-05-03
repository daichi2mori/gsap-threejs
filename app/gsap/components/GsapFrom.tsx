"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFrom = () => {
  useGSAP(() => {
    gsap.from("#green-box", {
      x: 300,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="mt-24">
      <h2 className="text-xl">GsapFrom</h2>
      <div className="mt-5">
        <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg" />
      </div>
    </div>
  );
};

export default GsapFrom;
