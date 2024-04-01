import clsx from "clsx";
import { ButtonProps, ButtonSizeEnum, ButtonVariantEnum } from "./Button.types";
import { ButtonSizeMap } from "./constants";

const Button = ({
  children,
  onClick,
  variant = ButtonVariantEnum.PRIMARY,
  type = "button",
  size = ButtonSizeEnum.MD,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "rounded-full text-white",
        ButtonSizeMap[size],
        {
          "bg-primary": variant === ButtonVariantEnum.PRIMARY,
        },
        { "bg-secondary": variant === ButtonVariantEnum.SECONDARY }
      )}
    >
      {children}
    </button>
  );
};

export { Button };
