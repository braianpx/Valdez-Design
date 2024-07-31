//aqui se crean los metodos para traer los datos del mockup
import Data from "../assets/mockups/Products.json"
import { images } from '../assets/mockups/images.ts'

export const getAllProducts = () => {
  const products = Data.map(el => {
    el.image = images[`Product ${el.id}`] || el.image 
    return el
  })
  return products;
}