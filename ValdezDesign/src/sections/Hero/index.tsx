import { utilsImages } from "../../utils/images"
import Button from "../../components/Button"

const descriptionHero = [
    "Explora nuestro extenso catálogo de productos sublimados.",
    "Elige entre miles de diseños para hacer únicas tus pertenencias.",
    "Adquiere productos totalmente personalizados a tu gusto."
]

const Hero = () => {
    return(
        <section className="md:flex-row md:gap-0 md:mt-0 md:h-screen items-center h-[82vh] flex-col-reverse w-screen flex justify-end border-2 gap-4 mt-[5rem]">
           <div className="md:w-3/5 md:gap-10 md:h-full w-full flex flex-col items-center gap-5 justify-center border-2">
                <h2 className="lg:text-5xl text-4xl font-bold text-black cursor-default text-center">
                    <span className="text-secondary">"</span>
                    Tus <span className="text-secondary">Cosas</span>, 
                    Tu <span className="text-secondary">Estilo</span>
                    <span className="text-secondary">"</span>
                    <br />
                     Articulos <span className="underline decoration-secondary"> Sublimados </span>
                </h2>
                <ul className="2xl:w-[67%] xl:w-[70%] w-[85%] xl:ms-10 lg:mb-16 mb-8 ms-4 list-disc text-secondary list-outside">
                    {   descriptionHero?.map(text =>
                        <li className="my-0.5">
                            <span className="text-black text-base">
                                {text}
                            </span>
                        </li>
                        )
                    }
                </ul>
                <Button button="primary" text="Ver Productos" redirect="productos/todos" />
            </div>
            <div className="md:h-full md:w-1/2 w-full flex justify-center items-center border-2">
                <figure className={`lg:h-[25rem] lg:w-[25rem] md:w-[16rem] md:h-[16rem] rounded-full flex justify-center items-center`}>
                    <div className={`xl:h-[25rem] xl:w-[25rem] lg:h-[22rem] lg:w-[22rem] md:w-[16rem] md:h-[16rem] animate-intermittent-ping bg-pastel-purple absolute rounded-full h-52 w-52 ${''}`}></div>
                    <img className="xl:h-[23rem] lg:h-[20rem] md:h-[16rem] animate-down-bounce -rotate-12 -translate-y-full rounded-full h-52 bg-opacity-0 z-20" src={utilsImages.cup} alt="" />
                </figure>
            </div>
        </section>
    )
}
export default Hero