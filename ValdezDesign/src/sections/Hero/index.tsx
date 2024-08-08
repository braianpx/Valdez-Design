import { utilsImages } from "../../utils/images"
import Button from "../../components/Button"
import styles from "./index.module.css"

const descriptionHero = [
    "Explora nuestro extenso catálogo de productos sublimados.",
    "Elige entre miles de diseños para hacer únicas tus pertenencias.",
    "Adquiere productos totalmente personalizados a tu gusto."
]

const Hero = () => {
    return(
        <section className="w-full h-screen flex items-center">
           <div className="w-1/2 flex flex-col items-center gap-10 justify-center">
                <h2 className="text-5xl font-bold text-black cursor-default text-center">
                    <span className="text-secondary">"</span>
                    Tus <span className="text-secondary">Cosas</span>, 
                    Tu <span className="text-secondary">Estilo</span>
                    <span className="text-secondary">"</span>
                    <br />
                     Articulos <span className="underline decoration-secondary"> Sublimados </span>
                </h2>
                <ul className="xl:w-2/3 w-4/5 xl:ms-10 mb-16 list-disc text-secondary">
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
            <div className="h-80 w-1/2 flex justify-center items-center">
                <figure className={`rounded-full flex justify-center items-center ${styles.divCircle}`}>
                    <div className={`animate-intermittent-ping bg-pastel-purple absolute rounded-full ${styles.divCircle}`}></div>
                    <img className="animate-down-bounce -rotate-12 -translate-y-full rounded-full h-96 bg-opacity-0 z-20" src={utilsImages.cup} alt="" />
                </figure>
            </div>
        </section>
    )
}
export default Hero