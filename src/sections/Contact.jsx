import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6"
    >
      <h2 className="text-5xl font-bold mb-4">
        Get In <span className="text-purple-500">Touch</span>
      </h2>

      <p className="text-gray-400 text-center max-w-2xl mb-12">
        I'm always open to discussing new opportunities,
        projects, and collaborations.
      </p>

      <div className="flex gap-8 text-4xl mb-12">
        <a
          href="mailto:srivastavadev2007@gmail.com"
          className="hover:text-purple-500 hover:scale-110 transition-all duration-300"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://github.com/srivastavadev07"
          target="_blank"
          rel="noreferrer"
          className="hover:text-purple-500 hover:scale-110 transition-all duration-300"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/devansh-srivastava-b418a7381?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noreferrer"
          className="hover:text-purple-500 hover:scale-110 transition-all duration-300"
        >
          <FaLinkedin />
        </a>
      </div>

<form
  action="https://formspree.io/f/mvzjqabv"
  method="POST"
  className="w-full max-w-xl space-y-6"
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="
      w-full
      p-4
      rounded-xl
      bg-slate-900
      border
      border-gray-700
      focus:border-purple-500
      outline-none
    "
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="
      w-full
      p-4
      rounded-xl
      bg-slate-900
      border
      border-gray-700
      focus:border-purple-500
      outline-none
    "
  />

  <textarea
    name="message"
    rows="5"
    placeholder="Your Message"
    required
    className="
      w-full
      p-4
      rounded-xl
      bg-slate-900
      border
      border-gray-700
      focus:border-purple-500
      outline-none
    "
  />

  <button
    type="submit"
    className="
      px-8
      py-4
      rounded-full
      bg-gradient-to-r
      from-purple-600
      to-fuchsia-500
      hover:scale-105
      transition-all
      duration-300
    "
  >
    Send Message
  </button>
</form>
      {/* <a
        href="mailto:yourmail@gmail.com"
        className="
          px-8
          py-4
          rounded-full
          bg-gradient-to-r
          from-purple-600
          to-fuchsia-500
          hover:scale-105
          transition-all
          duration-300
        "
      >
        Send Me An Email
      </a> */}
    </section>
  );
}

export default Contact;