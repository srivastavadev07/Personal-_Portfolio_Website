import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function SocialLinks() {
  return (
    <>
      {/* Desktop Sidebar */}
<div className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-8 text-3xl z-50">
        <a
          href="https://github.com/srivastavadev07"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="hover:text-purple-500 hover:scale-110 transition-all duration-300" />
        </a>

        <a
          href="https://www.linkedin.com/in/devansh-srivastava-b418a7381?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="hover:text-purple-500 hover:scale-110 transition-all duration-300" />
        </a>

        <a
          href="https://www.instagram.com/devansh41985?igsh=d2E3OWxpd2I4bDhu"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="hover:text-purple-500 hover:scale-110 transition-all duration-300" />
        </a>

      </div>
<div className="flex md:hidden justify-center gap-6 mt-6 text-3xl">
  {/* icons */}
</div>
      {/* Mobile Icons */}
    </>
  );
}

export default SocialLinks;