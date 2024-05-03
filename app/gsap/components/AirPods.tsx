"use client";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const AirPods = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null!);

  useGSAP(
    () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const frameCount = 147;
      const imagesPaths = Array.from(
        new Array(frameCount),
        (_, i) => `/airpods/${(i + 1).toString().padStart(4, "0")}.avif`
      );

      const images = imagesPaths.map((path) => {
        const img = new Image();
        img.src = path;
        return img;
      });

      let playhead = { frame: 0 };
      let curFrame = -1;

      const updateImage = () => {
        const frame = Math.round(playhead.frame);
        if (frame !== curFrame) {
          ctx?.clearRect(0, 0, canvas.width, canvas.height);
          ctx?.drawImage(images[frame], 0, 0);
          curFrame = frame;
        }
      };

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: canvas,
          start: "top top",
          end: "+=1000",
          scrub: true,
        },
      });

      timeline.to(playhead, {
        frame: images.length - 1,
        ease: "none",
        onUpdate: updateImage,
      });

      images[0].onload = updateImage;
    },
    { scope: canvasRef }
  );

  return (
    <>
      <div className="sticky top-0 h-[1158px] bg-black flex justify-center items-center">
        <canvas ref={canvasRef} width="1158" height="770" className="sticky top-0 max-w-full" />
      </div>
      <div className="h-[1200px]" />
    </>
  );
};

export default AirPods;
