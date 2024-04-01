import { CountUp, LinkedText, LinkedTextColorEnum } from "@/components/Atoms";

const Impact = () => {
  return (
    <section className="bg-secondary text-white py-24 rounded-2xl">
      <div className="w-full container ">
        <div className="w-full flex justify-end mb-4"></div>
        <div className="flex flex-col md:flex-row justify-between gap-5 w-full">
          <div className="w-full flex-1">
            <h2 className="text-white">Impacto</h2>
            <p className="text-white">
              Nos comprometemos a la transparencia con los emprendedores y el
              ecosistema emprendedor en Latinoamérica alineándonos con los
              Objetivos de Desarrollo Sostenible de las Naciones Unidas.
            </p>
          </div>
          <div className="md:w-[65%] flex flex-col gap-7 md:gap-3 md:items-end">
            <LinkedText
              text="Ver más"
              url=""
              variant={LinkedTextColorEnum.WHITE}
            />
            <div className="flex flex-col md:flex-row gap-7 md:gap-3 w-full md:w-auto">
              <CountUp end={2300} label="Emprendedores atendidos" />
              <CountUp end={329} label="Catalizadores capacitados" />
              <CountUp end={23} label="Países que tenemos incidencia" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Impact };
