import { LinkedText } from "@/components/Atoms";
import { InfiniteSlider } from "@/components/Molecules";
import { HOME_BRANDS_CAROUSEL } from "@/utils";

const OurPartners = () => {
  return (
    <section className="container space-y-10">
      <div className="flex md:flex-row flex-col justify-between items-start gap-4">
        <div className="md:max-w-[50%]">
          <h2>Nuestros aliados</h2>
          <p className="md:max-w-[78%] mb-5">
            Conoce a las organizaciones que nos acompañan por una sociedad más
            inclusiva y en sintonía con el ambiente.
          </p>
          <p className="md:max-w-[78%]">
            Contáctate para conocer más sobre cómo colaborar con Agora
            Partnerships.
          </p>
        </div>
        <div className="flex justify-start lg:justify-end w-full flex-1">
          <LinkedText text="Súmate como aliado" url="" />
        </div>
      </div>
      <InfiniteSlider images={HOME_BRANDS_CAROUSEL} />
    </section>
  );
};

export { OurPartners };
