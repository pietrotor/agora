import { NavItemProps } from "@/components";

const MENU: NavItemProps[] = [
  {
    label: "Quénes somos",
    url: "#",
  },
  {
    label: "Programas",
    url: "#",
    subItems: [
      {
        label: "Emprendimiento y pequeñas empresas en crecimiento",
        url: "#",
      },
      {
        label: "Ecosistemas",
        url: "#",
      },
      {
        label: "Proyectos inclusivos",
        url: "#",
      },
    ],
  },
  {
    label: "Impacto",
    url: "#",
  },
  {
    label: "Súmate",
    url: "#",
  },
  {
    label: "Blog",
    url: "/blog",
  },
  {
    label: "Recursos",
    url: "#",
  },
  {
    label: "Sedes",
    url: "#",
  },
];

export { MENU };
