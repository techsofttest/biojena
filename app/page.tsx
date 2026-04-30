import Hero from "./components/Hero";
import Thesis from "./components/Thesis";
import Technology from "./components/Technology";
import AboutSummary from "./components/AboutSummary";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent flex flex-col">

      {/* 01. The Immersive Video Hero */}
      <Hero />

      {/* 02. The Typographic Thesis */}
      <Thesis />

      {/* 03. The MMR Technology Grid */}
      <Technology />

      {/* 04. The Mission Statement */}
      <AboutSummary />

    </main>
  );
}