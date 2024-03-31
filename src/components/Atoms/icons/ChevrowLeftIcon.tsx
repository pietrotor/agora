import clsx from "clsx";
import { IconProps, IconVariantEnum } from "./icon.types";

const ChevrowLeftIcon = ({
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
          d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
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
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    );
  }
  return <></>;
};

export { ChevrowLeftIcon };
