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

export const getAllCategories = async (): Promise<string[]> => {
  const products = await getAllProducts();
  // Obtener todas las categorías, separando aquellas que están en un mismo array
  const allCategories = products.flatMap((product) => 
    product.categories.flatMap((category) => category.split(","))
  );
  // Limpiar categorías (eliminar espacios innecesarios) y eliminar duplicados
  const uniqueCategories = Array.from(
    new Set(allCategories.map((category) => category.trim()))
  );
  return uniqueCategories;
};

