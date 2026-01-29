import React from "react"
import { utilsImages } from "../../utils/images"
import ProductPath from "../../components/ProductPath"
import Pointer from "../../components/Pointer"

interface detailProducts {
    name: string;
    detail: string;
}

const details: Array<detailProducts> = [
    {
        name: "Productos",
        detail: "Ofrecemos una amplia variedad de productos, incluyendo tazas, vasos, gorras, remeras, cucharas, platos, llaveros, bolsos y mucho más."
    },
    {
        name: "Calidad",
        detail: "Nuestros productos son de excelente calidad, fabricados con materiales duraderos que garantizan su resistencia a lavados frecuentes y son aptos para microondas y lavavajillas."
    },
    {
        name: "Personalización",
        detail: "Puedes personalizarlos con tus propios diseños, fotos, mensajes u otros elementos a tu elección, o seleccionar entre nuestros diseños prediseñados."
    },
    {
        name: "Pagos",
        detail: "Los productos pueden ser pagados en efectivo o mediante transferencia bancaria."
    },
    {
        name: "Envíos",
        detail: "Contamos con envíos a domicilio o retiros en tienda para tu mayor comodidad."
    }
];

const DetailsProducts: React.FC = () => {
    return(
        <section className="sm:py-10 flex flex-col w-full border-y-2 border-dashed border-blue items-center pt-5 pb-2 gap-5">
            <h2 className="md:text-start text-center w-11/12 lg:text-4xl text-3xl font-bold text-black">
            ¿Qué <span className="underline decoration-secondary">Ofrecemos</span><span className="text-secondary">? </span>
            </h2>
            <div className="flex lg:flex-row flex-col-reverse">
                <div className="lg:w-1/2 flex flex-col h-full gap-7 items-center justify-center">
                    <ul className="lg:w-5/6 w-11/12">
                        {
                            details[0] && details?.map(el => (
                                <li className="py-1">
                                    <h3 className="text-secondary text-2xl">
                                        <Pointer text={el.name} />
                                    </h3>                         
                                    <p className="text-black text-base">
                                        {el.detail}
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
export default DetailsProducts;