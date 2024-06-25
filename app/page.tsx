import Experience from "@/components/Experience";
import Hero from "../components/Hero";
import Grid from "@/components/Grid";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex bg-black-100 justify-center items-center flex-col overflow-hidden mx-auto sm:px-5 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
