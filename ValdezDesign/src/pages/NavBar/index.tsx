import { Link } from 'react-router-dom'
import Logo from '../../assets/page/icons/logo.svg'
import ArrowDown from '../../assets/page/icons/arrowDown.svg'
import Save from '../../assets/page/icons/save.svg'
import YoutubeIcon from '../../assets/page/icons/youtube.svg'
import InstagramIcon from '../../assets/page/icons/instagram.svg'
import styles from './index.module.css'
import FacebookIcon from '../../assets/page/icons/facebook.svg' 

const productsLinks = [
    {
        name: 'Diseños sublimacion',
        to: '/productos/disenos'
    },
    {
        name: 'Personalizados',
        to: '/productos/personalizados'
    }
]

const NavBar = () => {

    const redirect  = (url: string) : void  => {
        window.open(url);
    }  

    return(
        <div className='h-screen'>
        <nav className='flex justify-around items-center w-screen'>
            <div className='flex items-center justify-around'>
                <img src={Logo} alt='logo of app' className='w-10' />
                <h1 className='text-lg relative top-1 font-bold text-primary cursor-default'> 
                    Valdez 
                    <br />
                    <span className='relative text-base bottom-3 left-1 text-textPrimary'>
                        Sublimacion
                    </span>
                </h1>
            </div>
            <ul className='flex justify-between w-2/6 '>
                <li className={`text-sm ${styles.navListMove}`}>
                    <Link to='/'>Inicio</Link>
                    </li>
                <li className='relative cursor-pointer text-sm' id={styles.dropdown}>          
                    <a className={`flex ${styles.navListMove}`}>
                        Productos 
                        <img className='ms-1' src={ArrowDown} alt="arrow-down-icon" />
                    </a>
                    <ul className='hidden absolute top-full left-0 bg-slate-300 p-2.5 cursor-pointer w-52' id={styles.dropdownContent}>
                        {
                            productsLinks.map((el, i)=> 
                                <li className='hover:ms-3 hover:mb-1 transition-all duration-250' key={i}>
                                    <Link to={el.to}>{el.name}</Link>
                                </li>
                            )
                        }
                    </ul>
                </li>
                <li className={`flex ${styles.navListMove} text-sm`}>
                    <Link to='/saves' className='flex'>
                        Guardados 
                        <img className='ms-1' src={Save} alt='save icon'/>
                    </Link> 
                </li>
                <li className={`text-sm ${styles.navListMove}`}>
                    <Link to='/acerca'>Acerca de</Link>
                </li>
                <li className={`text-sm ${styles.navListMove}`}>
                    <Link to='/reseñas'>Reseñas</Link>
                </li>
            </ul>
            <div className='flex justify-between items-center w-28'>
                    <img  onClick={()=>redirect('https://www.mercadolibre.com.ar/')} className='cursor-pointer transition-transform duration-200 hover:translate-x-1' src={YoutubeIcon} alt="go to our youtube" />
                    <img onClick={()=>redirect('https://www.mercadolibre.com.ar/')} className='cursor-pointer transition-transform duration-200 hover:translate-x-1' src={InstagramIcon} alt="go to our instagram" />
                    <img onClick={()=>redirect('https://www.mercadolibre.com.ar/')} className='cursor-pointer transition-transform duration-200 hover:translate-x-1' src={FacebookIcon} alt="go to our Facebook" />   
            </div>
        </nav>
        </div>
    )
}

export default NavBar
