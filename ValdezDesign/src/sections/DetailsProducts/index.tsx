import NormalIcon from "../../components/NormalIcon"
import React from "react"
import { utilsImages } from "../../utils/images"
import { icons } from "../../utils/icons"
import ProductPath from "../../components/ProductPath"

const details: string[] = [
    "Ofrecemos una amplia variedad de productos, incluyendo tazas, vasos, gorras, remeras, cucharas, platos, llaveros, bolsos y mucho más.",
    "Nuestros productos son de excelente calidad, fabricados con materiales duraderos que garantizan su resistencia a lavados frecuentes y son aptos para microondas y lavavajillas.",
    "Puedes personalizarlos con tus propios diseños, fotos, mensajes u otros elementos a tu elección, o seleccionar entre nuestros diseños prediseñados.",
    "Los productos pueden ser pagados en efectivo o mediante transferencia bancaria.",
    "Contamos con envíos a domicilio o retiros en tienda para tu mayor comodidad.",
    // "Explora nuestras categorías y haz tu pedido hoy mismo. ¡Crea algo único con nuestros productos sublimados!", este lo dejamos para las categorias
]


const DetailsProducts: React.FC = () => {
    return(
        <section className="flex flex-row w-full border-y-2 border-dashed border-blue items-center py-10">
            <div className="flex flex-col w-1/2 h-full gap-7 items-center justify-center">
                <h2 className="w-11/12 text-4xl font-bold text-black cursor-default">
                Sobre Nuestros <span className="underline decoration-secondary"> Productos </span>
                </h2>
                <ul className="w-5/6">
                    {
                        details[0] && details?.map(el => (
                            <li className="inline-flex items-start justify-start gap-1 my-2">
                                <NormalIcon icon={icons.check} alt="check"/>
                                <p className="text-black text-base leading-5"> {el}</p>
                            </li>
                        ))
                    }
                </ul> 
                <ProductPath />
            </div>
            <figure className="w-1/2 h-full flex justify-center items-center">
                <img src={utilsImages.productos} alt="" className="w-4/5 aspect-video object-cover border-pastel-purple border-opacity-20 border-2 rounded-md shadow-sm shadow-pastel-purple" />
            </figure >
        </section>
    )
}
export default DetailsProducts