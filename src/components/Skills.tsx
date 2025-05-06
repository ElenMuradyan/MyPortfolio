"use client";

import { skillGroups } from "@/lib/constants";
import { TextGenerateEffect } from "./ui/TextGenerateEffect ";
import { FloatingDockDemo } from "./ui/FloatingDocDemo";

const Skills = () => {
  return (
    <section id='skills' className="py-30 mt-[30px] px-6">
      <TextGenerateEffect 
      className="text-center mt-[30px] text-[30px] md:text-2xl lg:text-5xl" 
      words="My Skills and Tools I Use"/>

        <div className="mt-20 flex flex-col gap-16 items-center">
        {skillGroups.map((group, idx) => (
          <div key={idx}>
            <h1 className="text-center">
              <TextGenerateEffect color="purple-400" words={group.category}/>
            </h1>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <FloatingDockDemo links={group.skills}/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
