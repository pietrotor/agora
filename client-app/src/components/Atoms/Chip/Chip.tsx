import { ChipProps } from "./Chip.types";

const Chip = ({ children }: ChipProps) => {
  return (
    <div className="px-3 py-1 rounded-full text-white bg-text text-xs font-medium">
      {children}
    </div>
  );
};

export { Chip };
