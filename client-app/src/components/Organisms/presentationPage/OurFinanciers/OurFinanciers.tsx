import { InfiniteSlider } from "@/components/Molecules";
import { HOME_FINANCIERS_CAROUSEL } from "@/utils";

const OurFinanciers = () => {
  return (
    <section className="container space-y-10">
      <div className="max-w-[50%]">
        <h2>Nuestros Financiadores</h2>
      </div>
      <InfiniteSlider images={HOME_FINANCIERS_CAROUSEL} />
    </section>
  );
};

export { OurFinanciers };
