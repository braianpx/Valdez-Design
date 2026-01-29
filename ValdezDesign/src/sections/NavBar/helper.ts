import { IconProps } from "../../utils/types"
import { icons } from "../../utils/icons"

//interfaces
interface ProductsLinks {
  name: string,
  to: string;
}
export interface LinkNav {
  linkName: string;
  to?:string;
  extraLinks?: ProductsLinks[];
  icon?: string
}
//links del navbar
export const linksNav: LinkNav[] = [
  { 
      linkName: "Inicio" ,
      to: "/",
  },
  {
      linkName: "Productos" ,
      extraLinks: [
          {
              name: "Ver todos",
              to: `/productos/todos`
          },
          {
              name: "Personalizados",
              to: "/productos/personalizados"
          }
      ],
      icon: icons.arrowDown,
  },
  {
      linkName: "Guardados" ,
      to: "/guardados",
      icon: icons.save,
  },
  {
      linkName: "Acerca de" ,
      to: "/acerca_de",
  },
  {
      linkName: "Reseñas" ,
  }
];
//lins sociales
export const socialNetworksList: Array<IconProps> = [
  {
      url: "https://www.instagram.com/",
      icon: icons.instagram,
      alt: "ir a nuestro instagram"
  },
  {
      url: "https://www.youtube.com/",
      icon: icons.youtube,
      alt: "ir a nuestro youtube"
  },
  {
      url: "https://www.facebook.com/",
      icon: icons.facebook,
      alt: "ir a nuestro facebook"
  }
];