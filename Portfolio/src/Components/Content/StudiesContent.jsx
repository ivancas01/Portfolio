import React from "react";

export const StudiesContent = () => {
  return (
    <div className="grid gap-6">
      <div className=" bg-opacity-10 p-2 transition-all ease-in cursor-context-menu flex flex-col justify-between h-full">
        <div className="flex flex-col">
          <div className="">
            <p className="text-xs opacity-35 font-extralight text-center lg:text-center">
              2013 - 2015
            </p>
            <p className="text-xs m-0 opacity-35 font-extralight text-center lg:text-center">
              Universidad pedagógica y tecnológica de Colombia, UPTC
            </p>
          </div>
          <p className="text-xl content-end opacity-80 font-extralight text-center lg:text-center">
            Técnico en mantenimiento e instalación de redes
          </p>
        </div>
      </div>
      <div className=" bg-opacity-10 p-6 transition-all ease-in cursor-context-menu flex flex-col justify-between h-full">
        <div className="flex flex-col">
          <div className="">
            <p className="text-xs opacity-35 font-extralight text-center lg:text-center">
              2016 - 2021
            </p>
            <p className="text-xs m-0 opacity-35 font-extralight text-center lg:text-center">
              Fundación universitaria de San Gil, Unisangil
            </p>
          </div>
          <p className="text-xl content-end opacity-80 font-extralight text-center lg:text-center">
            Ingeniero de Sistemas
          </p>
        </div>
      </div>
    </div>
  );
};
