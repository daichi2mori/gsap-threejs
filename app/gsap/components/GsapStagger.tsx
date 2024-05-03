"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapStagger = () => {
  useGSAP(() => {
    gsap.to(".stagger-box", {
      y: -100,
      rotation: 360,
      borderRadius: "100%",
      repeat: -1,
      yoyo: true,
      // stagger: 0.1,
      stagger: {
        amount: 1,
        grid: [2, 1],
        axis: "y",
        ease: "circ.inOut",
        from: "center",
      },
    });
  }, []);

  return (
    <div className="mt-24">
      <h2 className="text-xl">GsapStagger</h2>
      <div className="flex justify-center gap-5 mt-5">
        <div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box" />
        <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box" />
        <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box" />
        <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box" />
        <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box" />
        <div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box" />
        <div className="w-20 h-20 bg-indigo-800 rounded-lg stagger-box" />
      </div>
    </div>
  );
};

export default GsapStagger;
