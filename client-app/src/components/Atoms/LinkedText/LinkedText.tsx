"use client";
import Link from "next/link";
import { LinkedTextColorEnum, LinkedTextProps } from "./LinkedText.types";
import Image from "next/image";
import clsx from "clsx";
import { useMemo } from "react";

const LinkedText = ({
  url,
  text,
  variant = LinkedTextColorEnum.BLUE,
}: LinkedTextProps) => {
  const imgSrc = useMemo(() => {
    if (variant === LinkedTextColorEnum.BLUE)
      return "/assets/images/blue_arrow.svg";
    if (variant === LinkedTextColorEnum.WHITE)
      return "/assets/images/white_arrow.svg";
    return "";
  }, [variant]);
  return (
    <Link href={url} className="flex items-center font-bold group gap-2">
      <p
        className={clsx(
          "whitespace-nowrap font-black text-sm",
          variant === LinkedTextColorEnum.BLUE && "text-secondary",
          variant === LinkedTextColorEnum.WHITE && "text-white"
        )}
      >
        {text}
      </p>
      <Image
        src={imgSrc}
        alt="flecha azul"
        className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300 -mb-[0px]"
        width={19}
        height={30}
      />
    </Link>
  );
};

export { LinkedText };
