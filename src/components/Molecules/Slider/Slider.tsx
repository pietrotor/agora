"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { SliderProps } from "./Slider.types";
import {
  ChevrowLeftIcon,
  ChevrowRightIcon,
  IconVariantEnum,
} from "@/components/Atoms";
import { useWindowWidth } from "@/hooks";
import { DESKTOP, MOBILE, TABLET } from "@/utils";

const Slider = ({ images }: SliderProps) => {
  const [index, setIndex] = useState<number>(0);
  const [currentImages, setCurrentImages] = useState<string[]>(
    images.map((img) => {
      if (typeof img === "string") return img;
      return img.desktop;
    })
  );
  const width = useWindowWidth();

  useEffect(() => {
    if (width >= DESKTOP) {
      setCurrentImages(
        images.map((img) => {
          if (typeof img === "string") return img;
          return img.desktop;
        })
      );
      return;
    }
    if (width >= TABLET) {
      setCurrentImages(
        images.map((img) => {
          if (typeof img === "string") return img;
          if (img.tablet) return img.tablet;
          return img.desktop;
        })
      );
      return;
    }
    if (width >= MOBILE) {
      setCurrentImages(
        images.map((img) => {
          if (typeof img === "string") return img;
          if (img.mobile) return img.mobile;
          return img.desktop;
        })
      );
      return;
    }
  }, [width, images]);

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleDotClick = (idx: number) => {
    setIndex(idx);
  };

  return (
    <div className="relative w-full h-[500px]">
      {currentImages.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`slide-${idx}`}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 object-cover rounded-3xl sm:rounded-none ${
            idx === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2  text-white p-2 rounded-l-md md:hidden"
        onClick={handlePrev}
      >
        <ChevrowLeftIcon
          variant={IconVariantEnum.OUTLINE}
          className="w-10 h-10"
          stroke={4}
        />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2  text-white p-2 rounded-r-md md:hidden"
        onClick={handleNext}
      >
        <ChevrowRightIcon
          variant={IconVariantEnum.OUTLINE}
          className="w-10 h-10"
          stroke={4}
        />
      </button>
      <div className="absolute md:hidden -bottom-6 left-0 right-0 flex justify-center mt-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 mx-1 rounded-full ${
              idx === index ? "bg-text" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(idx)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export { Slider };
