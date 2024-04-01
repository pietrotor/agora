"use client";
import clsx from "clsx";
import { MobileMenuProps } from "./MobileMenu.types";
import Link from "next/link";
import { NavItemProps, SubItem } from "@/components/Atoms";
import { useState } from "react";
import { useMobileMenuState } from "./hooks";

const MenuMobile = ({ isOpen, menu }: MobileMenuProps) => {
  const { containerRef } = useMobileMenuState({
    isOpen,
  });

  const renderSubItems = (subItems: SubItem[], isOpen: boolean) => {
    if (!isOpen) return <></>;
    return (
      <div
        className={clsx(
          "top-7 w-full group-hover:opacity-100 flex-col gap-3 lg:opacity-0 transition-all flex duration-500 py-1"
        )}
      >
        {subItems.map((item, index) => (
          <Link
            href={item.url}
            key={index}
            className="w-full px-7 py-3 bg-text text-white rounded-xl hover:bg-primary transition-colors duration-300 whitespace-nowrap font-bold"
          >
            {item.label}
          </Link>
        ))}
      </div>
    );
  };

  const NavItem = ({ label, url, subItems }: NavItemProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const onClick = () => {
      setIsOpen((state) => !state);
    };
    return (
      <div
        className="relative group w-full m-auto py-3 flex flex-col items-center"
        onClick={onClick}
      >
        <Link
          className="w-full group-hover:text-secondary text-center transition-colors duration-150 relative text-text sm:text-white lg:text-text"
          href={url}
        >
          {label}
        </Link>
        {subItems && subItems?.length > 0 && (
          <>{renderSubItems(subItems, isOpen)}</>
        )}
      </div>
    );
  };
  return (
    <div
      className={clsx(
        "absolute top-[68px] z-50 w-full overflow-hidden bg-white md:bg-[#B1B1B1] transition-all duration-500 flex lg:hidden flex-col items-center justify-start",
        !isOpen ? "max-h-0" : "max-h-[650px]"
      )}
      ref={containerRef}
    >
      {menu.map((navItem, index) => (
        <NavItem key={index} {...navItem} />
      ))}
      <a
        className="text-secondary transition-colors duration-150 relative hover:text-primary font-bold"
        href="https://change-lab.co/"
      >
        Change Lab
      </a>
    </div>
  );
};

export { MenuMobile };
