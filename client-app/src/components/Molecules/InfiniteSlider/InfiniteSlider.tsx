"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { InfiniteSliderProps } from "./InfiniteSlider.types";
import { IconVariantEnum, RightArrowIcon } from "@/components/Atoms";

const InfiniteSlider = ({ images }: InfiniteSliderProps) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  const CustomArrow = (props: any) => {
    return (
      <button
        type="button"
        className="absolute right-0 appearance-none"
        onClick={props.onClick}
      >
        <RightArrowIcon
          stroke={2}
          className="w-8 h-8"
          variant={IconVariantEnum.OUTLINE}
        />
      </button>
    );
  };
  return (
    <div className="w-full max-w-[100%] relative">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true}
        autoPlay
        infinite={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        transitionDuration={500}
        customLeftArrow={<></>}
        customRightArrow={<CustomArrow />}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {images.map((img, idx) => (
          <div
            className="w-full flex items-center justify-center h-full"
            key={idx}
          >
            <img src={img} className="w-52" alt="imagen de marca" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export { InfiniteSlider };
