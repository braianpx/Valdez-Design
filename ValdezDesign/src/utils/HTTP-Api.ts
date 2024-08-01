//aqui se crean los metodos para traer los datos del mockup
import Data from "../assets/mockups/Products.json"
import { images } from '../assets/mockups/images.ts'
import { Product } from "./types";

export const getAllProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    const products = Data.map(el => {
      el.image = images[`Product ${el.id}`] || el.image 
      return el
    })
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};