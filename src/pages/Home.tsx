import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Courses from "../components/Courses";
import Teachers from "../components/Teachers";
import About from "../components/About";
import Contact from "../components/Contact";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta({
    title: "Fluent Mind - Онлайн-школа с нейроподходом",
    description:
      "Онлайн-школа иностранных языков с нейродружелюбным подходом. Индивидуальные занятия и мини-группы для детей, подростков и взрослых.",
    path: "/",
  });

  return (
    <>
      <Hero />
      <HowItWorks />
      <Courses />
      <Teachers />
      <About />
      <Contact />
    </>
  );
}
