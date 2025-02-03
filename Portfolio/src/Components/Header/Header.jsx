import React from "react";

export const Header = () => {
  return (
    <div className="">
      <div className="lg:py-15 ">
        <div className="grid justify-self-center  mt-2">
          <h1 className="text-5xl lg:text-8xl font-semibold">Ivan Torres</h1>
        </div>

        <div className="grid justify-self-center mt-2 ">
          <p className="text-neutral-400 text-2xl ">Frontend Developer</p>
        </div>
        <div className="grid justify-self-center mt-2 ">
          <a
            href="mailto:ivancastrolol12@gmail.com?Subject=Aquí%20el%20asunto%20del%20mail"
            target="_blank"
            className="text-neutral-400 text-xs hover:text-emerald-300 text-decoration-line:underline transition-all duration-150 ease-linear"
          >
            Ivancastrolol12@gmail.com
          </a>
        </div>
        <div className="flex text-sm gap-5 justify-self-center uppercase mt-1 lg:py-4">
          <div className="">
            <a
              href="#about"
              className="hover:text-emerald-300 text-decoration-line:underline transition-all duration-150 ease-linear group"
            >
              Sobre mi
              <div className="bg-emerald-300 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </a>
          </div>
          <a
            href="#experience"
            className="hover:text-emerald-300 text-decoration-line:underline transition-all duration-150 ease-linear group"
          >
            Experiencia
            <div className="bg-emerald-300 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </a>
          <a
            href="#projects"
            className="hover:text-emerald-300 text-decoration-line:underline transition-all duration-150 ease-linear group"
          >
            Proyectos
            <div className="bg-emerald-300 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
          </a>
        </div>
      </div>
    </div>
  );
};
