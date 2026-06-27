import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-8 text-3xl">

      <a href="#">
        <FaGithub className="hover:text-purple-500 transition" />
      </a>

      <a href="#">
        <FaLinkedin className="hover:text-purple-500 transition" />
      </a>

      <a href="#">
        <FaInstagram className="hover:text-purple-500 transition" />
      </a>

    </div>
  );
}

export default SocialLinks;