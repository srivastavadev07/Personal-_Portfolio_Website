import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        flex
        items-center
        justify-between
        px-6
        md:px-10
        py-6
        backdrop-blur-md
        bg-black/20
      "
    >
      {/* Logo */}
      <h1 className="text-white text-2xl font-bold">
        DS
      </h1>

      {/* Email (Desktop Only) */}
      <a
        href="mailto:srivastavadev2007@gmail.com"
        className="
          hidden
          md:block
          text-white
          hover:text-purple-500
          transition-all
          duration-300
        "
      >
        srivastavadev2007@gmail.com
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-white">
        <li>
          <a href="#about" className="hover:text-purple-500">
            About
          </a>
        </li>

        <li>
          <a href="#skills" className="hover:text-purple-500">
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" className="hover:text-purple-500">
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" className="hover:text-purple-500">
            Contact
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
            absolute
            top-20
            right-6
            bg-slate-900
            border
            border-purple-500
            rounded-xl
            p-6
            flex
            flex-col
            gap-4
            text-white
          "
        >
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;