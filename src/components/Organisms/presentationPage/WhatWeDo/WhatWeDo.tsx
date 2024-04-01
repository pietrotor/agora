import { LinkedText } from "@/components/Atoms";
import { ServiceCard, ServiceCardHoverColorEnum } from "@/components/Molecules";

const SERVICES = [
  {
    title: "Emprendimientos y pequeñas empresas en crecimiento",
    description:
      "Ofrecemos formación empresarial, vinculación a mercados y acceso a financiamiento a emprendedores y pequeñas empresas en crecimiento en su camino hacia la sostenibilidad económica, social y ambiental.",
    image: "/assets/images/Mujer-emprendedora.png",
    variant: ServiceCardHoverColorEnum.PURPLE,
  },
  {
    title: "Ecosistema",
    description:
      "Contribuimos al fortalecimiento del ecosistema de emprendedores y pequeñas empresas en crecimiento a través de eventos, tales como el programa Formando Catalizadores, y el co-liderazgo de la Red de Impacto, integrada por más de 100 organizaciones de la región.",
    image: "/assets/images/planeacion.png",
    variant: ServiceCardHoverColorEnum.ORANGE,
  },
  {
    title: "Proyectos inclusivos",
    description:
      "Ejecutamos proyectos específicos junto a aliados con los que compartimos nuestra visión por la inclusión financiera, la equidad de género, la diversificación, resiliencia y sostenibilidad en las cadenas de valor, y la adaptación al cambio climático en la región.",
    image: "/assets/images/empresario.png",
    variant: ServiceCardHoverColorEnum.GREEN,
  },
];

const WhatWeDo = () => {
  return (
    <section className="container">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12">
        <div className="w-full md:max-w-[50%]">
          <h2>¿Qué hacemos?</h2>
          <p className="w-full md:max-w-[78%]">
            Calibramos el ecosistema emprendedor de América Latina para crear
            prosperidad inclusiva para el individuo, la empresa, la comunidad y
            el medio ambiente.
          </p>
        </div>
        <LinkedText text="Conocer más sobre nuestros programas" url="#" />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
        {SERVICES.map((service, index) => (
          <ServiceCard {...service} key={index} />
        ))}
      </div>
    </section>
  );
};

export { WhatWeDo };
