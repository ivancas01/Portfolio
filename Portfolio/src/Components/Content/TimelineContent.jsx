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
            Mi primera participación como desarrollador se centró en la creación
            de una plataforma para la recolección y actualización de información
            empresarial, lo cual permitió optimizar la gestión y el
            mantenimiento de datos clave. Adicionalmente, contribuí en el
            desarrollo de una página web educativa orientada a facilitar el
            aprendizaje del idioma finlandés para personas latinoamericanas,
            promoviendo así el acceso a oportunidades laborales en Finlandia.
          </p>
        </div>
      </div>
      <div className="card bg-gray-700/40 hover:bg-emerald-800 bg-opacity-10 p-6 transition-all ease-in cursor-context-menu flex flex-col justify-between h-full">
        <div className="flex flex-col">
          <div className="">
            <p className="text-xs opacity-35 font-extralight text-center lg:text-end">
              2023 - 2024
            </p>
            <p className="text-xs m-0 opacity-35 font-extralight text-center lg:text-end">
              AutoCar2000
            </p>
          </div>
          <p className="text-xl content-end opacity-80 font-extralight mt-7">
            Desarrollador
          </p>
          <p className="text-sm content-end opacity-80 font-extralight mt-4">
            Desarrollé un aplicativo para la gestión y organización de
            inventario en un establecimiento especializado en el tratamiento
            físico de vehículos automotrices, optimizando el control de stock y
            la eficiencia operativa.
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
            Desarrollé de una herramienta para la gestión de inventario y
            alquiler de vestidos por tiempo definido, integrando estándares de
            facturación y optimizando el control de stock y procesos
            administrativos.
          </p>
        </div>
      </div>
    </div>
  );
};
