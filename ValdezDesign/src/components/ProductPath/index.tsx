import React from "react"
import { utilsImages } from "../../utils/images"

const ProductPath: React.FC  = () => {
  return(
      <figure className="w-2/3 inline-flex items-center">
        <img src={utilsImages.whiteCup} alt="" className="bg-pastel-purple rounded-full border-2 border-solid aspect-square w-16 border-tertiary" />
        <div className="border-b-2 border-solid border-tertiary w-1/2 mx-1.5"></div>
        <img src={utilsImages.cup} alt="" className="bg-pastel-purple rounded-full aspect-square w-16 border-2 border-solid border-tertiary"/>
        <div className="border-b-4 border-dotted border-secondary w-1/2 mx-1.5"></div>
        <img src={utilsImages.delivery} alt="" className="bg-tertiary rounded-full aspect-square w-20 border-2 border-solid border-tertiary"/>
        <div className="border-b-2 border-dotted  w-1/2 mx-1.5"></div>
        <img src={utilsImages.house} alt="" className="bg-pastel-purple rounded-full aspect-square w-16"/>
      </figure>
  )
}
export default ProductPath