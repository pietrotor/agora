"use client";
import { useEffect, useState } from "react";

const useNavItemState = () => {
  const [isVisibleSubItems, setIsVisibleSubItems] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  useEffect(() => {
    let timer: any = null;
    if (!isHover) {
      timer = setTimeout(() => setIsVisibleSubItems(false), 500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isHover]);

  const handleHover = () => {
    setIsHover(true);
    setIsVisibleSubItems(true);
  };

  const handleRemoveHover = () => {
    setIsHover(false);
  };

  const handleToggle = () => {
    setIsSubMenuOpen(true);
  };

  return {
    isVisibleSubItems,
    handleHover,
    handleRemoveHover,
    handleToggle,
    isSubMenuOpen,
  };
};

export { useNavItemState };
