"use client";
import React, { useState, JSX } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex fixed top-10 inset-x-0 mx-auto border rounded-full ) z-[5000] pr-4 pl-10 py-4 items-center w-[100%] justify-center",
          className
        )}
        >
          <div
          style={{
            padding: 20,
            border: '1px solid white'
          }}
            className="flex rounded-full shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.15),0px_2px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] items-center w-[300] justify-between bg-[#000319af] "
          >
          {navItems.map((navItem: any, idx: number) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative text-neutral-50 items-center flex space-x-2  hover:text-neutral-300 text-lg font-medium"
              )}
            >
              <span className="block sm:hidden text-neutral-50">{navItem.icon}</span>
              <span className="hidden sm:block text-neutral-50">{navItem.name}</span>
            </a>
          ))}
          </div>
        </motion.div>
      </AnimatePresence>
  );
};
