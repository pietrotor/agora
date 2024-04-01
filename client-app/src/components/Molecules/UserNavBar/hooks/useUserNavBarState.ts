import { useState } from "react";

const useUserNavBarState = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen((state) => !state);
  };

  return {
    handleToggle,
    isMenuOpen,
  };
};

export { useUserNavBarState };
