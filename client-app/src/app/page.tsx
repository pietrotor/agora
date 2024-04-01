import {
  Contact,
  Impact,
  News,
  OpenPositions,
  OurFinanciers,
  OurPartners,
  Slider,
  UserLayout,
  WhatWeDo,
} from "@/components";
import { HOME_SLIDER_IMAGES } from "@/utils";

export default function Home() {
  return (
    <UserLayout>
      <div className="w-full space-y-28">
        <Slider images={HOME_SLIDER_IMAGES} />
        <WhatWeDo />
        <News />
        <OurPartners />
        <OurFinanciers />
        <Impact />
        <OpenPositions />
        <Contact />
      </div>
    </UserLayout>
  );
}
