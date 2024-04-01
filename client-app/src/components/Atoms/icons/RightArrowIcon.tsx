import clsx from "clsx";
import { IconProps, IconVariantEnum } from "./icon.types";

const RightArrowIcon = ({
  className,
  stroke = 1.5,
  variant = IconVariantEnum.OUTLINE,
}: IconProps) => {
  if (variant === IconVariantEnum.SOLID) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={clsx("w-6 h-6", className)}
      >
        <path
          fillRule="evenodd"
          d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (variant === IconVariantEnum.OUTLINE) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={stroke}
        stroke="currentColor"
        className={clsx("w-6 h-6", className)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
    );
  }
  return <></>;
};

export { RightArrowIcon };
