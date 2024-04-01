enum InputColorEnum {
  DEFAULT = "DEFAULT",
  WHITE = "WHITE",
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: InputColorEnum;
}

export type { InputProps };
export { InputColorEnum };
