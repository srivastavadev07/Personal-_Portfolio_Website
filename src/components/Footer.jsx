function Footer() {
  return (
    <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
      <p>
        © {new Date().getFullYear()} Devansh Srivastava. All rights reserved.
      </p>

      <p className="mt-2 text-sm">
        Built with React, Tailwind CSS & ❤️
      </p>
    </footer>
  );
}

export default Footer;