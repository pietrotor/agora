enum LinkedTextColorEnum {
  WHITE = "white",
  BLUE = "blue",
}

type LinkedTextProps = {
  url: string;
  text: string;
  variant?: LinkedTextColorEnum;
};

export type { LinkedTextProps };
export { LinkedTextColorEnum };
