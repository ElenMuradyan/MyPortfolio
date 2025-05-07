import { section } from "framer-motion/client";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/lib/constants";

export default function Footer () {
    return(
        <section id="contact" className="h-[50vh] w-[100%] flex flex-col items-center justify-center gap-3">
      <div className="w-full absolute left-0 -bottom-72">
        <img
          src="/Images/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col gap-20 items-center">
        <a href="https://mailto:muradyanelen506@gmail.com" target='contact'>
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex flex-col mt-16 gap-3 justify-center items-center">
        <p className="md:text-base text-white text-sm md:font-normal font-light">
          Copyright © 2025 Muradyan Elen
        </p>

        <div className="flex items-center justify-center w-[150%]">
            <div className="flex justify-between items-center gap-5">
            {socialMedia.map((info) => (
            <a key={info.id} href={info.href} target={info.href}>
                <div
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                    <img className="icon" src={info.img} alt="icons" width={20} height={20} />
                </div>
            </a>
          ))}
            </div>
        </div>
      </div>
    </section>
    )
}