import Hero from "@/components/Hero";
import Techstack from "@/components/Techstack";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center bg-zinc-900 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 py-10 sm:py-14 md:py-20 lg:py-28">
        <Hero />
        <Techstack />
        <Projects />
      </main>
    </>
  );
}
