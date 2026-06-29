import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialLinks from "./components/SocialLinks";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import StarsBackground from "./components/StarsBackground";
import Stats from "./sections/Stats";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
{/* <div className="bg-black text-white overflow-x-hidden"></div> */}

function App() {
  return (
    <>
    <ScrollProgress />
      <StarsBackground />

      <div className="relative z-10 bg-transparent text-white">
        <Navbar />
        <SocialLinks />
        <Hero />
        <About />
        <div className="h-[2px] w-2/3 mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        <Stats />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
export default App;