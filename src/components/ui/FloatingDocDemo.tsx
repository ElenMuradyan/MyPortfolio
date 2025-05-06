import React from "react";
import { FloatingDock } from "./floating-dock";

export function FloatingDockDemo({links}: {links: {title: string, icon: React.ReactNode, href: string}[]}) {
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
