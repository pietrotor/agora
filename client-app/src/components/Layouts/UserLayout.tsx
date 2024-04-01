import { Manrope } from "next/font/google";
import { UserNavBar } from "../Molecules";
import { UserLayoutProps } from "./UserLayout.types";
import { Footer } from "../Molecules/Footer/Footer";
import { MENU } from "@/utils";

const manrope = Manrope({ subsets: ["latin"] });

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <>
      <UserNavBar menu={MENU} />
      {children}
      <Footer />
    </>
  );
};

export { UserLayout };
