/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import { ServiceCardProps } from "./ServiceCard.types";
import { BG_HOVER } from "./constants";

const ServiceCard = ({
  description,
  image,
  title,
  variant,
}: ServiceCardProps) => {
  return (
    <article className="w-full group space-y-4 relative">
      <img
        alt="imagen referente al servicio"
        className="w-full rounded-2xl hover:scale-105 transition-all duration-200"
        src={image}
      />
      <div
        className={clsx(
          "p-6 rounded-lg transition-colors duration-100 group-hover:text-white",
          BG_HOVER[variant]
        )}
      >
        <h4 className="text-inherint font-black text-lg mb-4">{title}</h4>
        <p className="text-inherit text-sm">{description}</p>
      </div>
      <div className="absolute -top-9 opacity-0 transition-all duration-300 group-hover:opacity-100 left-10">
        <img
          src="/assets/images/rayas.svg"
          alt="rayas naranjas"
          className="w-5"
        />
      </div>
    </article>
  );
};

export { ServiceCard };
