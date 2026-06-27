import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialLinks from "./components/SocialLinks";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import StarsBackground from "./components/StarsBackground";
{/* <div className="bg-black text-white overflow-x-hidden"></div> */}

function App() {
  return (
    <>
      <StarsBackground />

      <div className="relative z-10 bg-transparent text-white">
        <Navbar />
        <SocialLinks />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
export default App;