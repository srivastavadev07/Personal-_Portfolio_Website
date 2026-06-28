import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-8 text-3xl">

      <a href="https://github.com/srivastavadev07">
        <FaGithub className="hover:text-purple-500 transition" />
      </a>

      <a href="https://www.linkedin.com/in/devansh-srivastava-b418a7381?utm_source=share_via&utm_content=profile&utm_medium=member_android">
        <FaLinkedin className="hover:text-purple-500 transition" />
      </a>

      <a href="https://www.instagram.com/devansh41985?igsh=d2E3OWxpd2I4bDhu">
        <FaInstagram className="hover:text-purple-500 transition" />
      </a>

    </div>
  );
}

export default SocialLinks;