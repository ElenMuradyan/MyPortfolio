import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Skills from "@/components/Skills";
import { navbarItems } from "@/lib/constants";

export default function Home() {
  return (
    <main className="relative bg-[#000319] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full">
        <h1>
          <FloatingNav navItems={navbarItems}/>
          <Hero />
          <Grid />
          <RecentProjects/>
          <Skills />
        </h1>
      </div>
    </main>
  );
}