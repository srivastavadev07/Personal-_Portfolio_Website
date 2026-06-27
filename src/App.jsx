import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />

      <SocialLinks />

      <Hero />

    </div>
  );
}

export default App;