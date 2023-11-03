import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Aos from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
