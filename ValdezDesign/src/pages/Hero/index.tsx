import Cup from '../../assets/page/taza-hero-2.png'
import styles from './index.module.css'

const descriptionHero = [
    'Explora nuestro catálogo de diseños exclusivos y personalizados.',
    'Adquiere diseños individuales, opta por nuestros paquetes prediseñados.',
    'Crea tus propios paquetes personalizados según tus preferencias.'
]

const Hero = () => {
    return(
        <div className='w-full flex items-center mt-32'>
           <div className='w-1/2 flex flex-col items-center gap-12'>
                <h2 className=' text-5xl font-bold text-black xl:w-full cursor-default w-4/5 text-center'>
                    <span className='text-secondary'>"</span> 
                    Tus <span className='text-secondary'>Cosas</span>, 
                    Tu <span className='text-secondary'>Estilo</span>
                    <span className='text-secondary'>"</span>
                     <br />
                     Articulos <span className='underline decoration-secondary'> Sublimados </span>
                </h2>
                <div className='w-4/5 flex justify-end mb-8'>
                    <ul className='list-disc text-secondary '>
                        {   descriptionHero?.map(text =>
                            <li>
                                <span className='text-black text-base'>
                                    {text}
                                </span>
                            </li>
                            )
                        }
                    </ul>
                </div>
                <button className='mb-20 hover:translate-x-5 transition-all duration-500 bg-secondary text-white font-normal rounded-md hover:bg-white hover:text-secondary border-2 border-secondary' >Ver Diseños</button>
            </div>
            <div className='h-80 w-1/2 flex justify-center items-center'>
                <div className={`rounded-full flex justify-center items-center ${styles.divCircle}`}>
                    <div className={`animate-intermittent-ping bg-pastel-purple absolute rounded-full ${styles.divCircle}`}></div>
                    <img className='animate-down-bounce -rotate-12 -translate-y-full rounded-full h-96 bg-opacity-0 z-20' src={Cup} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Hero