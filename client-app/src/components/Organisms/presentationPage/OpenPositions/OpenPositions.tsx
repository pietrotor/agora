import { Button, ButtonSizeEnum } from "@/components/Atoms";
import { ArticleCard } from "@/components/Molecules/ArticleCard";

const OPPEN_POSITIONS = [
  {
    image: "/assets/images/jobs/diseñador.webp",
    title: "Diseñador Gráfico Freelance",
    description:
      "Buscamos un/a Diseñador/a Gráfico con al menos 3 años de experiencia en diseño de presentaciones, materiales educativos, brochures, y otros materiales asociados a productos educativos digitales.",
    category: "Oportunidad laboral",
  },
  {
    image: "/assets/images/jobs/data-engenier.webp",
    title: "Data Engineer (Ingeniero/a de Datos)",
    description:
      "Buscamos un/a Data Engineer (Ingeniero de Datos) que contribuya al desarrollo, implementación y mantenimiento de un sistema de gestión de datos eficiente, eficaz y robusto",
    category: "Oportunidad laboral",
  },
  {
    image: "/assets/images/jobs/gerente.webp",
    title: "Gerente de Alianzas",
    description:
      "Buscamos un/una profesional con experiencia y habilidades en la construcción y gestión de alianzas comerciales y estratégicas con múltiples tipos de organizaciones",
    category: "Oportunidad laboral",
  },
];

const OpenPositions = () => {
  return (
    <section className="container space-y-6">
      <div className="flex md:flex-row flex-col justify-between items-center">
        <h2 className="md:max-w-[50%] w-full flex-1">
          Oportunidades laborales
        </h2>
        <div className="md:max-w-[50%] w-full flex-1">
          <Button size={ButtonSizeEnum.LG}>
            Conoce todas nuestras vacantes
          </Button>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
        {OPPEN_POSITIONS.map((news, index) => (
          <ArticleCard {...news} key={index} />
        ))}
      </div>
    </section>
  );
};

export { OpenPositions };
