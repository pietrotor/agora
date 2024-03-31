enum IconVariantEnum {
  SOLID = "solid",
  OUTLINE = "outline",
}

type IconProps = {
  className?: HTMLElement["className"];
  stroke?: number;
  variant?: IconVariantEnum;
};

export type { IconProps };
export { IconVariantEnum };
