import { ServiceCardHoverColorEnum } from "../ServiceCard.types";

const BG_HOVER: Record<ServiceCardHoverColorEnum, HTMLElement["className"]> = {
  [ServiceCardHoverColorEnum.GREEN]:
    "group-hover:bg-gradient-to-r from-[#0D9A51] to-[#02804C]",
  [ServiceCardHoverColorEnum.ORANGE]:
    "group-hover:bg-gradient-to-r from-[#E2663A] to-[#EB9B1A]",
  [ServiceCardHoverColorEnum.PURPLE]:
    "group-hover:bg-gradient-to-r from-pink-600 to-red-700",
};

export { BG_HOVER };
