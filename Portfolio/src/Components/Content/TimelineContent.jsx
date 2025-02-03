import React from "react";

export const TimelineContent = () => {
  return (
    <div className="grid lg:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] grid-cols-[repeat(auto-fit,minmax(100%,1fr))] gap-10">
      <div className="card bg-gray-700/40 hover:bg-emerald-800 bg-opacity-10 p-6 transition-all ease-in cursor-context-menu flex flex-col justify-between h-full">
        <div className="flex flex-col">
          <div className="">
            <p className="text-xs opacity-35 font-extralight text-center lg:text-end">
              2020 - 2023
            </p>
            <p className="text-xs m-0 opacity-35 font-extralight text-center lg:text-end">
              International Data and Information Consulting
            </p>
          </div>
          <p className="text-xl content-end opacity-80 font-extralight mt-7">
            Desarrollador Frontend
          </p>
          <p className="text-sm content-end opacity-80 font-extralight mt-4">
            Como desarrollador en IDIC, colaboré en proyectos que van desde
            aplicaciones web simples hasta sistemas complejos, siempre enfocado
            en ofrecer soluciones de alta calidad que superen las expectativas
            del cliente
          </p>
        </div>
      </div>
      <div className="card bg-gray-700/40 hover:bg-emerald-800 bg-opacity-10 p-6 transition-all ease-in cursor-context-menu flex flex-col justify-between h-full">
        <div className="flex flex-col">
          <div className="">
            <p className="text-xs opacity-35 font-extralight text-center lg:text-end">
              2024 - 2025
            </p>
            <p className="text-xs m-0 opacity-35 font-extralight text-center lg:text-end">
              El Sol, Alquiler y venta de vestidos
            </p>
          </div>
          <p className="text-xl content-end opacity-80 font-extralight mt-7">
            Desarrollador Frontend
          </p>
          <p className="text-sm content-end opacity-80 font-extralight mt-4">
            Para esta contratación, realicé una contribución directa al apartado
            visual, es decir, al frontend de un proyecto dedicado exclusivamente
            a la venta y alquiler de vestidos, implementando un diseño atractivo
            e intuitivo para garantizar la eficacia del producto.
          </p>
        </div>
      </div>
    </div>
  );
};
