import { Button, LagButtons } from "@/components/Atoms";
import { MENU } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full container bg-white">
      <div className="w-full grid grid-cols-4 gap-12">
        <div className="flex flex-col justify-between">
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
      </div>
    </footer>
  );
};

export { Footer };
