import clsx from "clsx";
import { ButtonProps, ButtonSizeEnum, ButtonVariantEnum } from "./Button.types";
import { ButtonSizeMap } from "./constants";
import { Spinner } from "../Spinner";
import Link from "next/link";

const Button = ({
  children,
  onClick,
  variant = ButtonVariantEnum.PRIMARY,
  type = "button",
  size = ButtonSizeEnum.MD,
  isLoading,
  href,
  isExternalLink = false,
}: ButtonProps) => {
  if (href) {
    return (
      <Link
        href={href}
        target={isExternalLink ? "_self" : "_blank"}
        type={type}
        onClick={onClick}
        className={clsx(
          "rounded-full text-white",
          ButtonSizeMap[size],
          {
            "bg-primary disabled:bg-primary/80":
              variant === ButtonVariantEnum.PRIMARY,
          },
          {
            "bg-secondary disabled:bg-secondary/80":
              variant === ButtonVariantEnum.SECONDARY,
          }
        )}
      >
        <Spinner isHidden={!isLoading} />
        {children}
      </Link>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading}
      className={clsx(
        "rounded-full text-white",
        ButtonSizeMap[size],
        {
          "bg-primary disabled:bg-primary/80":
            variant === ButtonVariantEnum.PRIMARY,
        },
        {
          "bg-secondary disabled:bg-secondary/80":
            variant === ButtonVariantEnum.SECONDARY,
        }
      )}
    >
      <Spinner isHidden={!isLoading} />
      {children}
    </button>
  );
};

export { Button };
