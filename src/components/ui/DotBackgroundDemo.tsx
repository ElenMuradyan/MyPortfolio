import { cn } from "@/lib/utils";
import React from "react";
import { TextGenerateEffect } from "./TextGenerateEffect ";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";

export function DotBackgroundDemo() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-[#000319]">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-[#000319]"/>
      <div className='flex justify-center relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
            Hello, I'm Elen — a Frontend Developer.
            </h2>
            <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl" 
            words="Transforming consepts into Seamless Experiences"/>

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            I craft modern, responsive, and user-friendly web experiences using technologies like React, Next.js, TypeScript and Tailwind CSS. I'm passionate about clean code, great design, and building interfaces that users love.
            </p>
            <a href="/about">
            <MagicButton 
            title="Show my work"
            icon={<FaLocationArrow />}
            position="right"
            />
            </a>
          </div>
        </div>
    </div>
  );
}