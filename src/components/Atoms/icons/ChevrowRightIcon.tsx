import clsx from "clsx";
import { IconProps, IconVariantEnum } from "./icon.types";

const ChevrowRightIcon = ({
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
          d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
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
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    );
  }
  return <></>;
};

export { ChevrowRightIcon };
