import React from "react"
import { utilsImages } from "../../utils/images"

const ProductPath: React.FC  = () => {
  return(
      <figure className="xl:w-2/5 lg:w-[85%] md:w-2/3 w-11/12 inline-flex items-center">
        <img src={utilsImages.whiteCup} alt="" className="md:w-[3.8rem] bg-pastel-purple rounded-full border-2 border-solid aspect-square w-[3.4rem] border-tertiary" />
        <div className="border-b-2 border-solid border-tertiary w-1/2 mx-1.5"></div>
        <img src={utilsImages.cup} alt="" className="md:w-[3.8rem] bg-pastel-purple rounded-full aspect-square w-[3.4rem] border-2 border-solid border-tertiary"/>
        <div className="border-b-4 border-dotted border-secondary w-1/2 mx-1.5"></div>
        <img src={utilsImages.delivery} alt="" className="md:w-[4.3rem] bg-tertiary rounded-full aspect-square w-[4rem] border-2 border-solid border-tertiary animate-intermittent-move"/>
        <div className="border-b-2 border-dotted border-black w-1/2 mx-1.5"></div>
        <img src={utilsImages.house} alt="" className="md:w-[3.8rem] bg-pastel-purple rounded-full aspect-square w-[3.3rem]"/>
      </figure>
  )
}
export default ProductPath