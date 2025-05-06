import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import { FloatingNavDemo } from "@/components/ui/FloatingNavDemo";

export default function Home() {
  return (
    <main className="relative bg-[#000319] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full">
        <h1>
          <FloatingNavDemo/>
          <Hero />
          <Grid />
          <RecentProjects/>
          <Skills />
        </h1>
      </div>
    </main>
  );
}