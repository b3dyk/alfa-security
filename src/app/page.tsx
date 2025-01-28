import Benefits from "./components/Benefits/Benefits";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import CallbackForm from "@/components/CallbackForm/CallbackForm";
import css from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <About />
      <CallbackForm />
    </main>
  );
}
