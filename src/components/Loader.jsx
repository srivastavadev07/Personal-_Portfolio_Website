import { useEffect, useState } from "react";

function Loader() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStage(1);
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
      <div className="text-center px-4">
        {stage === 0 ? (
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
            "
          >
            DS
          </h1>
        ) : (
          <>
            <h1
              className="
                bg-gradient-to-r
                from-purple-400
                to-fuchsia-500
                bg-clip-text
                text-transparent
                font-bold
                whitespace-nowrap
                text-[8vw]
                md:text-7xl
              "
            >
              Devansh Srivastava
            </h1>

            <p
              className="
                mt-3
                text-gray-400
                text-sm
                sm:text-lg
                md:text-2xl
                tracking-wide
              "
            >
              Aspiring Software Engineer
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Loader;