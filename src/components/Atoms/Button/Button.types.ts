import { ReactNode } from "react";

enum ButtonVariantEnum {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: ButtonVariantEnum;
  type?: HTMLButtonElement["type"];
};

export { ButtonVariantEnum };
export type { ButtonProps };
