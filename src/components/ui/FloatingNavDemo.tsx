"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { navbarItems } from "@/lib/constants";

export function FloatingNavDemo() {
  return (
    <div className="relative flex justify-center h-[50px] w-[100%] items-center">
      <FloatingNav navItems={navbarItems} />
    </div>
  );
}
