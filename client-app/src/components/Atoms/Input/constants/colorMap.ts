import { InputColorEnum } from "../Input.types";

const INPUT_COLOR_MAP: Record<InputColorEnum, string> = {
  [InputColorEnum.DEFAULT]: "text-text placeholder:text-text border-text",
  [InputColorEnum.WHITE]: "text-white placeholder:text-white border-white",
};

export { INPUT_COLOR_MAP };
