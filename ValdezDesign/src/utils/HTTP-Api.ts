//aqui se crean los metodos para traer los datos del mockup
import Data from "../assets/mockups/Products.json"
import { imagesProducts } from "../assets/mockups/images.ts"
import { Product } from "./types";

export const getAllProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    const products = Data.map(el => {
      el.image = imagesProducts[`ImageProduct${el.id}`] || el.image 
      return el
    })
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};