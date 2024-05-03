"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTo = () => {
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 300,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 1,
    });
  }, []);

  return (
    <div>
      <h2 className="text-xl">GsapTo</h2>
      <div className="mt-5">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </div>
  );
};

export default GsapTo;
