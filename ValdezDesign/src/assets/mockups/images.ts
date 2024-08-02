import ImgProduct1 from './productsImages/product-image-1.png';
import ImgProduct2 from './productsImages/product-image-2.png';

interface Images {
  [key: string] : string
}

export const imagesProducts: Images = {
  'ImageProduct1': ImgProduct1,
  'ImageProduct2': ImgProduct2,
};