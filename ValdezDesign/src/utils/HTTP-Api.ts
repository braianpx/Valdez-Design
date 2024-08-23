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
  const products = await getAllProducts()
  const categories = products.map(el => el.categories)
  const flattenedCategories = categories.flat()
  const separateCategories = flattenedCategories.toString().split(' ').join("").split(',')
  const filterCategories = [...new Set(separateCategories)];
  return filterCategories;
}