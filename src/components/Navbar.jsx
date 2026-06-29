function Navbar() {
  return (
<nav className="
  fixed
  top-0
  left-0
  w-full
  z-50
  flex
  items-center
  justify-between
  px-10
  py-6
  backdrop-blur-md
  bg-black/20
">      
      {/* Left Section - Logo */}
<h1 className="
  text-white
  text-2xl
  font-bold
  cursor-pointer
  hover:text-purple-500
  hover:scale-110
  transition-all
  duration-300
">
  DS
</h1>      {/* Center Section - Email */}
      <p className="text-white cursor-pointer hover:text-purple-500 hover:-translate-y-1 transition-all duration-300">
        {/* <a devanshsrivastava@gmail.com </a> */}
             <a
      href="mailto:srivastavadev2007@gmail.com"
  className="
    relative
    hover:text-purple-500
    transition-all
    duration-300
    after:content-['']
    after:absolute
    after:w-0
    after:h-[2px]
    after:bg-purple-500
    after:left-0
    after:-bottom-1
    after:transition-all
    after:duration-300
    hover:after:w-full">
          srivastavadev2007@gmail.com
    </a>

      </p>

      {/* Right Section - Navigation */}
<ul className="hidden md:flex gap-10">
          <li className="text-white cursor-pointer hover:text-purple-500 hover:-translate-y-1 transition-all duration-300">
     <a
      href="#about"
  className="
    relative
    hover:text-purple-500
    transition-all
    duration-300
    after:content-['']
    after:absolute
    after:w-0
    after:h-[2px]
    after:bg-purple-500
    after:left-0
    after:-bottom-1
    after:transition-all
    after:duration-300
    hover:after:w-full">
          About
    </a>
        </li>
        <li className="text-white cursor-pointer hover:text-purple-500 hover:-translate-y-1 transition-all duration-300">
     <a
     href="#skills"
  className="
    relative
    hover:text-purple-500
    transition-all
    duration-300
    after:content-['']
    after:absolute
    after:w-0
    after:h-[2px]
    after:bg-purple-500
    after:left-0
    after:-bottom-1
    after:transition-all
    after:duration-300
    hover:after:w-full">
          Skills
    </a>
        </li>

        <li className="text-white cursor-pointer hover:text-purple-500 hover:-translate-y-1 transition-all duration-300">
 <a
      href="#projects"
  className="
    relative
    hover:text-purple-500
    transition-all
    duration-300
    after:content-['']
    after:absolute
    after:w-0
    after:h-[2px]
    after:bg-purple-500
    after:left-0
    after:-bottom-1
    after:transition-all
    after:duration-300
    hover:after:w-full">
          Projects
    </a>
        </li>

        <li className="text-white cursor-pointer hover:text-purple-500 hover:-translate-y-1 transition-all duration-300">
   <a
      href="#contact"
  className="
    relative
    hover:text-purple-500
    transition-all
    duration-300
    after:content-['']
    after:absolute
    after:w-0
    after:h-[2px]
    after:bg-purple-500
    after:left-0
    after:-bottom-1
    after:transition-all
    after:duration-300
    hover:after:w-full">
          Contact
    </a>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;