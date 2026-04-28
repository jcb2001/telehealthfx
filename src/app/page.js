import { Hero } from "../components/hero.jsx";
import { PressStrip, HowItWorks, Medications } from "../components/sections-1.jsx";
import { Results, Science, Pricing } from "../components/sections-2.jsx";
import { FAQ } from "../components/sections-3.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <PressStrip />
      <HowItWorks />
      <Medications />
      <Results />
      <Science />
      <Pricing />
      <FAQ />
    </>
  );
}
