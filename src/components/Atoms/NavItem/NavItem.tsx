"use client";
import Link from "next/link";
import { NavItemProps, SubItem } from "./NavItem.type";
import { useNavItemState } from "./hooks";
import clsx from "clsx";

const NavItem = ({ label, subItems = [], url }: NavItemProps) => {
  const {
    isVisibleSubItems,
    handleHover,
    handleRemoveHover,
    handleToggle,
    isSubMenuOpen,
  } = useNavItemState();

  const renderSubItems = (subItems: SubItem[]) => {
    return (
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleRemoveHover}
        className={clsx(
          "absolute top-7 z-[99] group-hover:opacity-100 flex-col gap-3 lg:opacity-0 bg-gray-300 transition-all duration-500 py-1",
          !isVisibleSubItems && !isSubMenuOpen ? "hidden" : "flex lg:flex"
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

  return (
    <div
      className="relative group w-full m-auto"
      onMouseEnter={handleHover}
      onMouseLeave={handleRemoveHover}
    >
      <Link
        className="group-hover:text-secondary transition-colors duration-150 relative text-white lg:text-text whitespace-nowrap"
        href={url}
        onClick={handleToggle}
      >
        {label}
      </Link>
      {subItems.length > 0 && <>{renderSubItems(subItems)}</>}
    </div>
  );
};

export { NavItem };
