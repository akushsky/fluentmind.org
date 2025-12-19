import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Teachers from "./components/Teachers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function FluentMindLanding() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <Hero />
      <About />
      <Teachers />
      <Contact />
      <Footer />
    </div>
  );
}
