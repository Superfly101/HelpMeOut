import Demo from "./components/Demo";
import Features from "./components/Features";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="px-4 md:px-16">
      <Hero />
      <Features />
      <Demo />
    </main>
  );
}
