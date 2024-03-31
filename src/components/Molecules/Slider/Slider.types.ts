type TImage =
  | {
      desktop: string;
      tablet?: string;
      mobile?: string;
    }
  | string;

type SliderProps = {
  images: TImage[];
};

export type { SliderProps, TImage };
