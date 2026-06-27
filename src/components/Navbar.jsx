function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6">
      
      {/* Left Section - Logo */}
      <h1 className="text-white text-2xl font-bold">
        DS
      </h1>

      {/* Center Section - Email */}
      <p className="text-white
cursor-pointer
hover:text-purple-500
hover:-translate-y-1
transition-all
duration-300">
        devanshsrivastava@example.com
      </p>

      {/* Right Section - Navigation */}
      <ul className="flex gap-10">
        <li className="text-white
cursor-pointer
hover:text-purple-500
hover:-translate-y-1
transition-all
duration-300">
          About
        </li>

        <li className="text-white
cursor-pointer
hover:text-purple-500
hover:-translate-y-1
transition-all
duration-300">
          Projects
        </li>

        <li className="text-white
cursor-pointer
hover:text-purple-500
hover:-translate-y-1
transition-all
duration-300">
          Contact
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;