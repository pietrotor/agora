import clsx from "clsx";
import { INPUT_COLOR_MAP } from "./constants";
import { InputColorEnum, InputProps } from "./Input.types";

const Input = ({ color = InputColorEnum.DEFAULT, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={clsx(
        "appearance-none w-full outline-none border-b border-t-0 border-l-0 border-r-0 border-2 p-2 bg-transparent",
        INPUT_COLOR_MAP[color]
      )}
    />
  );
};

export { Input };
