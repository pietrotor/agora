import { ReactNode } from "react";

enum ButtonVariantEnum {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

enum ButtonSizeEnum {
  LG = "lg",
  MD = "md",
}

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: ButtonVariantEnum;
  type?: HTMLButtonElement["type"];
  size?: ButtonSizeEnum;
  isLoading?: boolean;
  href?: string;
  isExternalLink?: boolean;
  disabled?: boolean;
};

export type { ButtonProps };

export { ButtonVariantEnum, ButtonSizeEnum };
