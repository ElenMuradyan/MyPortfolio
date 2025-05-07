import { cn } from "@/lib/utils";
import React from "react";
import { TextGenerateEffect } from "./TextGenerateEffect ";
import MagicButton from "./MagicButton";
import { FaIdCard, FaLocationArrow } from "react-icons/fa";

export function DotBackgroundDemo() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-[#000319]">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-[#000319]"/>
      <div className='flex justify-center relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
            Hello, I'm Elen Muradyan — a Frontend Developer based in Yerevan, Armenia.
            </h2>
            <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl" 
            words="Currently open to full-time or freelance opportunities"/>

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            I’m passionate about building clean, responsive web apps using React, TypeScript, and modern tools like Next.js, Firebase, and Tailwind CSS.
            </p>
            <div className="flex w-[100%] gap-5 justify-center items-center">
            <a href="/about">
            <MagicButton 
            title="Show my work"
            icon={<FaLocationArrow />}
            position="right"
            />
            </a>
            <a href="/Cerceficates/resume.pdf" target="resume">
            <MagicButton 
            title='SEE MY RESUME'
            icon={<FaIdCard/>}
            position="right"
            />
            </a>
            </div>
          </div>
        </div>
    </div>
  );
}