enum ServiceCardHoverColorEnum {
  GREEN = "green",
  ORANGE = "orange",
  PURPLE = "purple",
}

type ServiceCardProps = {
  image: string;
  title: string;
  description: string;
  variant: ServiceCardHoverColorEnum;
};

export type { ServiceCardProps };
export { ServiceCardHoverColorEnum };
