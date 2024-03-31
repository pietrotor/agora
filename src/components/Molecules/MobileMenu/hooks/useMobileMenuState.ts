"use client";
import { useEffect, useRef, useState } from "react";

type TUseMobileMenuStateProps = {
  isOpen: boolean;
};

const useMobileMenuState = ({ isOpen }: TUseMobileMenuStateProps) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [somethingChange, setSomethingChange] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(isOpen ? containerRef.current.scrollHeight * 2 : 0);
    }
  }, [isOpen, somethingChange]);

  const hadleToggle = () => {
    setSomethingChange((state) => !state);
  };

  return {
    containerRef,
    containerHeight,
    hadleToggle,
  };
};

export { useMobileMenuState };
