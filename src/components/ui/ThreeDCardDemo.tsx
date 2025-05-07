"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import MagicButton from "./MagicButton";
import { Eye } from "lucide-react";
import { BsGithub } from "react-icons/bs";

export function ThreeDCardDemo({title, des, img, iconLists, link, gitLink}: {title: string, des: string, img: string, iconLists: string[], link: string, gitLink: string}) {
  return (
    <CardContainer className="inter-var flex flex-wrap gap-50">
      <CardBody 
      className=" flex flex-col gap-5 relative group/card border-black/[0.1] w-auto sm:w-[30rem] rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl w-[100%] text-center font-bold text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-center text-sm max-w-sm mt-2 text-purple-200"
        >
          {des}
        </CardItem>
        <CardItem
         translateZ="100" className="w-full mt-4">
          <img
          src={img}
            height="800"
            width="800"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        <CardItem
            translateZ={20}
            as="div"
            className="flex items-center justify-between mt-15 mb-3"
          >
          <div className="flex items-center w-full justify-between gap-4 flex-wrap">
            {iconLists.map((icon, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-5 h-5 rounded-full border p-5"
              >
                <img src={icon} alt="icon" className="icon p-2" />
              </div>
            ))}
          </div>
          </CardItem>

        </CardItem>
        <CardItem
            translateZ={20}
            as="div"
            className="flex justify-between w-[100%] items-center mt-20" 
        >
                <a href={link} target={link}>
                <MagicButton title='View Demo' icon={<Eye/>} position="right"/>
                </a>

                <a href={gitLink} target={gitLink}>
                <MagicButton title='View Github'icon={<BsGithub/>} position="right" />
                </a>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
