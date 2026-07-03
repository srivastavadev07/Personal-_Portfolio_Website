import { useEffect, useState } from "react";

function Loader() {
  const [showFullName, setShowFullName] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFullName(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="
        fixed
        inset-0
        bg-black
        flex
        items-center
        justify-center
        z-[9999]
      "
    >
<h1
  className="
    bg-gradient-to-r
    from-purple-400
    to-fuchsia-500
    bg-clip-text
    text-transparent
    text-5xl
    md:text-8xl
    font-bold
    animate-pulse
  "
>
  {showFullName ? "Devansh Srivastava" : "DS"}
</h1>    </div>
  );
}

export default Loader;