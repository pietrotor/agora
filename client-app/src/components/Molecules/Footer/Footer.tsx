import {
  Button,
  FacebookIcon,
  InstragramIcon,
  LagButtons,
  LinkedinIcon,
  MediumIcon,
  SpotifyIcon,
  YouTubeIcon,
} from "@/components/Atoms";
import { MENU } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full container bg-white py-16">
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col justify-between gap-5">
          <Image
            src={"/assets/images/logo.png"}
            alt="logo Agora"
            width={150}
            height={80}
          />
          <p className="text-[10px]">
            <span className="font-bold">Agora Partnership® </span>All rights
            reserved.Reg. U.S. Pat. and TM Off{" "}
            <Link href={"#"} className="text-primary">
              Politica de privacidad
            </Link>
          </p>
        </div>
        <div className="gap-4 flex flex-col">
          {MENU.map((item, index) => (
            <Link key={index} href={item.url} className="text-sm">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="space-y-4">
          <Button>Donar</Button>
          <p className="text-secondary text-sm font-bold">
            Suscribirme al newsletter
          </p>
          <LagButtons />
        </div>
        <div className="flex flex-col justify-between gap-6">
          <div className="grid grid-cols-3 gap-x-0 gap-y-3 place-content-center h-fit">
            <a
              href="https://www.facebook.com/AgoraPartnerships"
              target="_blank"
              className="appearance-none outline-none text-text hover:text-text/80 w-fit"
            >
              <FacebookIcon className="!w-8 !h-8" />
            </a>
            <a
              href="https://www.instagram.com/agora_2030/"
              target="_blank"
              className="appearance-none outline-none text-text hover:text-text/80 w-fit"
            >
              <InstragramIcon className="!w-8 !h-8" />
            </a>
            <a
              href="https://medium.com/@AgoraPartnerships"
              target="_blank"
              className="appearance-none outline-none text-text hover:text-text/80 w-fit"
            >
              <MediumIcon className="!w-8 !h-8" />
            </a>
            <a
              href="https://www.linkedin.com/company/agora-partnerships/"
              target="_blank"
              className="appearance-none outline-none text-text hover:text-text/80 w-fit"
            >
              <LinkedinIcon className="!w-8 !h-8" />
            </a>
            <a
              href="https://open.spotify.com/show/2ejv4LsiSWT9GsFnnHsHZc?si=8f23d80250c54fb6&nd=1"
              target="_blank"
              className="appearance-none outline-none text-text hover:text-text/80 w-fit"
            >
              <SpotifyIcon className="!w-8 !h-8" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCHourQ5NcP4S-jsA2fvBmEA"
              target="_blank"
              className="appearance-none outline-none text-text hover:text-text/80 w-fit"
            >
              <YouTubeIcon className="!w-8 !h-8" />
            </a>
          </div>
          <p className="text-sm md:text-center">info@agora2030.org</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
