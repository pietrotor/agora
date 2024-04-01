type SubItem = {
  label: string;
  url: string;
};

type NavItemProps = {
  label: string;
  url: string;
  subItems?: SubItem[];
};

export type { NavItemProps, SubItem };
