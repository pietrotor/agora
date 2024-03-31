import { Slider, TImage, UserLayout } from "@/components";

export default function Home() {
  const IMAGES: TImage[] = [
    {
      desktop:
        "https://agora2030.org/wp-content/uploads/2024/01/Banner-sitio-web-1-jpg.webp",
      mobile:
        "https://agora2030.org/wp-content/uploads/2024/01/Banner-cel-1-jpg.webp",
    },
    "https://agora2030.org/wp-content/uploads/2024/01/Formando-Catalizadores_Cel-1-jpg.webp",
  ];
  return (
    <UserLayout>
      <Slider images={IMAGES} />
    </UserLayout>
  );
}
