"use client";
import {
  Button,
  HamburgerIcon,
  NavItem,
  LagButtons,
  ButtonSizeEnum,
} from "@/components/Atoms";
import Image from "next/image";
import { useUserNavBarState } from "./hooks";
import { MenuMobile } from "../MobileMenu";
import { UserNavBarProps } from "./UserNavBar.types";

const UserNavBar = ({ menu }: UserNavBarProps) => {
  const { handleToggle, isMenuOpen } = useUserNavBarState();
  return (
    <header className="w-full bg-white shadow-2xl relative lg:sticky top-0 z-[99]">
      <div className=" flex justify-between max-w-[1140px] px-4 m-auto lg:px-0 py-3 gap-7">
        <Image
          width={110}
          height={80}
          src={"/assets/images/logo.png"}
          alt="logo Agora"
        />
        <nav className="lg:flex hidden text-sm items-center gap-6">
          {menu.map((navItem, index) => (
            <NavItem key={index} {...navItem} />
          ))}
          <a
            className="text-secondary transition-colors duration-150 relative hover:text-primary font-bold whitespace-nowrap"
            href="https://change-lab.co/"
          >
            Change Lab
          </a>
        </nav>
        <div className="flex items-center lg:hidden w-full justify-end">
          <div className="mr-20 block sm:hidden">
            <Button size={ButtonSizeEnum.MD}>Donar</Button>
          </div>
          <button
            type="button"
            className="appearance-none outline-none p-1 h-fit bg-gray-100 text-text rounded"
            onClick={handleToggle}
          >
            <HamburgerIcon stroke={3} />
          </button>
        </div>
        <div className="items-center gap-6 sm:flex hidden md:pr-28 lg:pr-0">
          <Button>Donar</Button>
          <LagButtons />
        </div>
      </div>
      <MenuMobile isOpen={isMenuOpen} menu={menu} />
    </header>
  );
};

export { UserNavBar };
