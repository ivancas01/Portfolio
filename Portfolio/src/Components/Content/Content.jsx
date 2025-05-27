import { TimelineContent } from "./TimelineContent";
import { ProjectsContent } from "./ProjectsContent";
import { StudiesContent } from "./StudiesContent";

export const Content = () => {
  return (
    <div className="pt-10 lg:py-1 ">
      <p
        id="about"
        className="text-md text-center sm:text-sm md:text-md lg:text-md xl:text-xl text-neutral-300 px-5"
      >
        Soy un desarrollador Frontend apasionado por crear experiencias
        digitales cautivadoras, funcionales e intuitivas, con una sólida
        experiencia en el desarrollo de aplicaciones web utilizando ReactJS y
        tecnologías asociadas. Mi enfoque combina un profundo conocimiento en{" "}
        <strong>HTML5</strong>, <strong>CSS3 (Sass)</strong> y{" "}
        <strong>Bootstrap</strong> para diseñar interfaces responsivas y
        visualmente atractivas, mejorando la usabilidad y la interacción del
        usuario. Además, poseo un dominio avanzado de{" "}
        <strong>JavaScript</strong> para desarrollar funcionalidades dinámicas,
        experiencia en la gestión de bases de datos MySQL y conocimientos
        básicos en Python y Django REST. He trabajado en proyectos que van desde
        aplicaciones web simples hasta sistemas complejos, siempre priorizando
        la calidad y la excelencia para superar las expectativas del cliente.
        Con un fuerte enfoque en <strong>UI/UX</strong>, me especializo en
        diseñar interfaces atractivas y fáciles de usar. Comprometido con la
        mejora continua, busco constantemente ampliar mis conocimientos y
        enfrentar nuevos desafíos en entornos dinámicos, con el objetivo de
        aportar soluciones innovadoras y eficientes en el desarrollo frontend.
      </p>
      <div>
        <div>
          <h1
            id="about"
            className="mt-15 text-center text-2xl lg:text-4xl font-semibold"
          >
            Estudios
          </h1>
          <hr className="w-[50%] justify-self-center mt-5 border-1 border-gray-500 bg-gray-500 h-0.5 rounded-2xl" />
          <div className="pt-10 lg:py-5">
            <StudiesContent />
          </div>
        </div>
        <div>
          <h1
            id="experience"
            className="mt-15 text-center text-2xl lg:text-4xl font-semibold"
          >
            Experiencia Laboral
          </h1>
          <hr className="w-[50%] justify-self-center mt-5 border-1 border-gray-500 bg-gray-500 h-0.5 rounded-2xl" />
          <div className="pt-10 lg:py-5">
            <TimelineContent />
          </div>
        </div>
        <div>
          <h1
            id="projects"
            className="mt-20 text-center text-2xl lg:text-4xl font-semibold"
          >
            Proyectos
          </h1>
          <hr className="w-[50%] justify-self-center mt-5 border-1 border-gray-500 bg-gray-500 h-0.5 rounded-2xl" />
          <div className="pt-10 lg:py-5">
            <ProjectsContent />
          </div>
        </div>
      </div>
    </div>
  );
};
