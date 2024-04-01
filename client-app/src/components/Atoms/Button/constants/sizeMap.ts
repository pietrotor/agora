import { ButtonSizeEnum } from "../Button.types";

const ButtonSizeMap: Record<ButtonSizeEnum, string> = {
  [ButtonSizeEnum.LG]: "py-2 px-6 text-base font-medium",
  [ButtonSizeEnum.MD]: "px-6 py-[2px] font-normal text-[13px]",
};

export { ButtonSizeMap };
