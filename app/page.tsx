import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Techstack from "@/components/Techstack";

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center bg-zinc-900 px-40 py-28">
        <Hero/>
        <Techstack/>
        <Projects/>
      </main>
    </>
  );
}
