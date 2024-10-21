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
        <section className="sm:py-10 flex flex-col w-full border-y-2 border-dashed border-blue items-center py-5 gap-5">
            <h2 className="md:text-start text-center w-11/12 lg:text-4xl text-3xl font-bold text-black cursor-default">
            Sobre Nuestros <span className="underline decoration-secondary"> Productos </span>
            </h2>
            <div className="flex lg:flex-row flex-col-reverse">
                <div className="lg:w-1/2 flex flex-col h-full gap-7 items-center justify-center">
                    <ul className="lg:w-5/6 w-11/12">
                        {
                            details[0] && details?.map(el => (
                                <li className="my-5">                         
                                    <p className="text-black text-base leading-4">
                                        <span className="inline-block align-middle">
                                            <NormalIcon icon={icons.check} alt="check"/>
                                        </span>{el}
                                    </p>
                                </li>
                            ))
                        }
                    </ul> 
                    {window.screen.width <= 768   && <ProductPath />}
                </div>
                <figure className="sm:my-0 flex-col mb-5 mt-3 lg:w-1/2 flex justify-center items-center gap-8">
                    <img src={utilsImages.productos} alt="" className="w-4/5 aspect-video object-cover border-pastel-purple border-opacity-20 border-2 rounded-md drop-shadow-md" />
                    {(window.screen.width >= 1024 && window.screen.width < 1440) && <ProductPath />}
                </figure >
            </div>
            {window.screen.width >= 1440  && <ProductPath />}
        </section>
    )
}
export default DetailsProducts