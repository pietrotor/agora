import clsx from "clsx";
import { ButtonProps, ButtonVariantEnum } from "./Button.types";

const Button = ({
  children,
  onClick,
  variant = ButtonVariantEnum.PRIMARY,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "px-8 py-[2px] rounded-full text-white font-normal text-[13px]",
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
