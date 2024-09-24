import Benefits from "./components/Benefits/Benefits";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import css from "./page.module.css";
import HeroNew from "./components/HeroNew/HeroNew";
import CallbackForm from "@/components/CallbackForm/CallbackForm";

export default function Home() {
  return (
    <main>
      {/* <Hero /> */}
      <HeroNew />
      <Benefits />
      <About />
      <CallbackForm />
    </main>
  );
}
