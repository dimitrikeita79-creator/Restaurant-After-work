import logo from "@/assets/afterwork/logo.png";
import plat1 from "@/assets/afterwork/Plats (1).jpeg";
import plat2 from "@/assets/afterwork/Plats (2).jpeg";
import plat3 from "@/assets/afterwork/Plats (3).jpeg";
import plat4 from "@/assets/afterwork/Plats (4).jpeg";
import plat5 from "@/assets/afterwork/Plats (5).jpeg";
import plat7 from "@/assets/afterwork/Plats (7).jpeg";
import plat8 from "@/assets/afterwork/Plats (8).jpeg";
import plat9 from "@/assets/afterwork/Plats (9).jpeg";
import plat10 from "@/assets/afterwork/Plats (10).jpeg";
import plat11 from "@/assets/afterwork/Plats (11).jpeg";
import plat12 from "@/assets/afterwork/Plats (12).jpeg";
import plat13 from "@/assets/afterwork/Plats (13).jpeg";
import plat14 from "@/assets/afterwork/Plats (14).jpeg";
import plat15 from "@/assets/afterwork/Plats (15).jpeg";
import plat16 from "@/assets/afterwork/Plats (16).jpeg";
import plat17 from "@/assets/afterwork/Plats (17).jpeg";
import plat18 from "@/assets/afterwork/Plats (18).jpeg";
import plat19 from "@/assets/afterwork/Plats (19).jpeg";
import plat20 from "@/assets/afterwork/Plats (20).jpeg";
import plat21 from "@/assets/afterwork/Plats (21).jpeg";
import plat22 from "@/assets/afterwork/Plats (22).jpeg";
import plat23 from "@/assets/afterwork/Plats (23).jpeg";
import plat24 from "@/assets/afterwork/Plats (24).jpeg";
import boissons from "@/assets/afterwork/Boissons.jpeg";
import boisson2 from "@/assets/Boissons/2.jpeg";
import menu1 from "@/assets/afterwork/Menu (1).jpeg";
import menu2 from "@/assets/afterwork/Menu (2).jpeg";
import menu3 from "@/assets/afterwork/Menu (3).jpeg";
import menu4 from "@/assets/afterwork/Menu (4).jpeg";

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  category: "Plats" | "Grillades" | "Boissons" | "Entrées" | "Menu";
};

export const PRODUCTS: Product[] = [
  {
    id: "poulet-braise",
    name: "1",
    description: "",
    image: plat1,
    category: "Grillades",
  },
  {
    id: "brochettes-boeuf",
    name: "2",
    description: "",
    image: plat2,
    category: "Plats",
  },
  {
    id: "jollof-poulet",
    name: "3",
    description: "",
    image: plat3,
    category: "Grillades",
  },
  {
    id: "poulet-plantains",
    name: "4",
    description: "",
    image: plat4,
    category: "Plats",
  },
  {
    id: "salade-composee",
    name: "5",
    description: "",
    image: plat5,
    category: "Entrées",
  },
  {
    id: "assiette-decouverte",
    name: "6",
    description: "",
    image: plat7,
    category: "Plats",
  },
  {
    id: "shawarma-frites",
    name: "7",
    description: "",
    image: plat8,
    category: "Plats",
  },
  {
    id: "saute-boeuf",
    name: "8",
    description: "",
    image: plat9,
    category: "Grillades",
  },
  {
    id: "biere-pression",
    name: "9",
    description: "",
    image: boissons,
    category: "Boissons",
  },
  {
    id: "vin-rouge",
    name: "10",
    description: "",
    image: plat10,
    category: "plats",
  },
  {
    id: "plat-11",
    name: "11",
    description: "",
    image: plat11,
    category: "Plats",
  },
  {
    id: "plat-12",
    name: "12",
    description: "",
    image: plat12,
    category: "Plats",
  },
  {
    id: "plat-13",
    name: "13",
    description: "",
    image: plat13,
    category: "Plats",
  },
  {
    id: "plat-14",
    name: "14",
    description: "",
    image: plat14,
    category: "Plats",
  },
  {
    id: "plat-15",
    name: "15",
    description: "",
    image: plat15,
    category: "Plats",
  },
  {
    id: "plat-16",
    name: "16",
    description: "",
    image: plat16,
    category: "Plats",
  },
  {
    id: "plat-17",
    name: "17",
    description: "",
    image: plat17,
    category: "Plats",
  },
  {
    id: "plat-18",
    name: "18",
    description: "",
    image: plat18,
    category: "Plats",
  },
  {
    id: "plat-19",
    name: "19",
    description: "",
    image: plat19,
    category: "Plats",
  },
  {
    id: "plat-20",
    name: "20",
    description: "",
    image: plat20,
    category: "Plats",
  },
  {
    id: "plat-21",
    name: "21",
    description: "",
    image: plat21,
    category: "Plats",
  },
  {
    id: "plat-22",
    name: "22",
    description: "",
    image: plat22,
    category: "Plats",
  },
  {
    id: "plat-23",
    name: "23",
    description: "",
    image: plat23,
    category: "Plats",
  },
  {
    id: "plat-24",
    name: "24",
    description: "",
    image: plat24,
    category: "Plats",
  },

  {
    id: "menu-carte-1",
    name: "1",
    description: "",
    image: menu1,
    category: "Menu",
  },
  {
    id: "menu-carte-2",
    name: "2",
    description: "",
    image: menu2,
    category: "Menu",
  },
  {
    id: "menu-carte-3",
    name: "3",
    description: "",
    image: menu3,
    category: "Menu",
  },
  {
    id: "menu-carte-4",
    name: "4",
    description: "",
    image: menu4,
    category: "Menu",
  },
];

export const CATEGORIES = ["Tous", "Plats", "Grillades", "Entrées", "Boissons", "Menu"] as const;
export type Category = (typeof CATEGORIES)[number];