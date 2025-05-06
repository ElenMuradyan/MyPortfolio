"use client";

import { skillGroups } from "@/lib/constants";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect ";

const Skills = () => {
  return (
    <section id='skills' className="py-30 mt-[30px] px-6 h-[100vh]">
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
              {group.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="group relative flex flex-col items-center p-4 bg-white/10 dark:bg-white/5 rounded-xl w-24 h-24 justify-center hover:scale-110 transition cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                >
                  <img src={skill.icon} alt={skill.name} className="icon w-10 h-10" />
                  <span className="text-sm mt-2 text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
