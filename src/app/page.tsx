import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-[#000319] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-full">
        <h1>
          <Hero />
        </h1>
      </div>
    </main>
  );
}