import { ArticleCard } from "@/components/Molecules/ArticleCard";

const NEWS = [
  {
    image: "/assets/images/Juntas-Contamos-portada-1-jpg.webp",
    title: "Programa Juntas Contamos",
    description:
      "Oportunidad para mujeres empresarias en México, Guatemala, El Salvador y Honduras. Juntas Contamos Consta de tres programas dirigidos a 3 perfiles diferentes de empresarias.",
    category: "Convocatoria abierta",
  },
  {
    image: "/assets/images/Francis-Castillo-scaled.webp",
    title:
      "“Alcanzar un equilibrio entre el trabajo y familia uno de los retos más importantes al ser empresaria”",
    description:
      "Francis Castillo, fundadora de ‘The Baking Mom’es un gran ejemplo de cómo el ser mamá y emprendedora se puede lograr rompiendo paradigmas y miedos",
    category: "Blog",
  },
  {
    image: "/assets/images/Agora-Partnership-y-Change-Lab-jpg.webp",
    title:
      "Transformando a América Latina: Agora Partnerships adquiere CreativeLab",
    description:
      "Esta unión no solo representa una evolución en el nombre de la marca colombiana a ChangeLab, sino que también establece ambiciosas metas para el futuro.",
    category: "Sala de prensa",
  },
];

const News = () => {
  return (
    <section className="container">
      <h2>¿Qué hacemos?</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
        {NEWS.map((news, index) => (
          <ArticleCard {...news} key={index} />
        ))}
      </div>
    </section>
  );
};

export { News };
