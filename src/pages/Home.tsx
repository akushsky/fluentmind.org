import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Courses from "../components/Courses";
import Teachers from "../components/Teachers";
import About from "../components/About";
import Contact from "../components/Contact";
import { usePageMeta } from "../hooks/usePageMeta";
import { PAGE_META } from "../seo/routes";

export default function Home() {
  usePageMeta(PAGE_META.home);

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
