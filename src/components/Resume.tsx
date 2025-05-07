import { FaIdCard } from "react-icons/fa";
import { PinContainer } from "./ui/3d-pin";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect ";

export default function Resume () {
    return(
        <section className="flex flex-col items-center justify-center" id='resume'>
            <TextGenerateEffect
                words='Completed Course Certificates from Armenian Code Academy'
                className="text-center mt-8 text-[20px] md:text-2xl lg:text-3xl"  
                margin={50}
            />
            <div className="flex flex-col sm:flex-row items-center justify-center">

            <PinContainer
             title="Advanced JavaScript Certificate from Armenian Code Academy"
             href="/Cerceficates/js.pdf"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                    <h3 className="text-center max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                        ADVANCED JS
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 text-center">
                        Completed an Advanced JavaScript course, exploring async programming, closures, DOM manipulation, and OOP.
                        </span>
                    </div>
                    <img src="/Images/js.jpg"/>
                    <div className="flex flex-1 w-full rounded-lg mt-4" style={{}}>
                    </div>
                </div>
            </PinContainer>

            <PinContainer
             title="React.JS Certificate from Armenian Code Academy"
             href="/Cerceficates/react.pdf"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                    <h3 className="text-center max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                        REACT.JS
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 text-center">
                        Completed React.js course covering hooks, context, Redux, React-Router and performance optimization.
                        </span>
                    </div>
                    <img src="/Images/react.jpg"/>
                    <div className="flex flex-1 w-full rounded-lg mt-4" style={{}}>
                    </div>
                </div>
            </PinContainer>
            </div>

            <a href="/Cerceficates/resume.pdf" target="resume">
            <MagicButton 
            title='SEE MY RESUME'
            icon={<FaIdCard />}
            position="right"
            />
            </a>
        </section>
    )
}