"use client";

import { projects } from "@/lib/constants";
import { TextGenerateEffect } from "./ui/TextGenerateEffect ";
import { ThreeDCardDemo } from "./ui/ThreeDCardDemo";

const RecentProjects = () => {
  return (
    <div className="mt-[90px]">
      <h1 className="heading">
        <TextGenerateEffect 
          className="text-center mt-8 text-[20px] md:text-2xl lg:text-3xl" 
          words="A COLLECTION OF MY PROJECTS"
        />
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item, i) => (
            <ThreeDCardDemo key={i} link={item.link} des={item.des} iconLists={item.iconLists} title={item.title} img={item.img} gitLink={item.gitLink}/>)
        )}
        </div>
    </div>
  );
};

export default RecentProjects;
