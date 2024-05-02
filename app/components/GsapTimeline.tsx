"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTimeline = () => {
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });

  useGSAP(() => {
    timeline.to("#yellow-box", {
      x: 300,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });

    timeline.to("#yellow-box", {
      y: -100,
      scale: 2,
      rotation: 360,
      borderRadius: "100%",
      duration: 1,
      ease: "back.inOut",
    });

    timeline.to("#yellow-box", {
      x: 600,
      scale: 1,
      rotation: 360,
      borderRadius: "8px",
      duration: 1,
      ease: "back.inOut",
    });
  }, []);

  return (
    <div className="mt-24">
      <h2 className="text-xl">GsapFrom</h2>
      <button
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold my-2 py-1 px-2 rounded"
        onClick={() => {
          if (timeline.paused()) {
            timeline.play();
          } else {
            timeline.pause();
          }
        }}
      >
        Play/Pause
      </button>
      <div className="mt-5">
        <div id="yellow-box" className="w-20 h-20 bg-yellow-500 rounded-lg" />
      </div>
    </div>
  );
};

export default GsapTimeline;
