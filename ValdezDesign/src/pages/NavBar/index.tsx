import { Link, Outlet } from 'react-router-dom'
import Logo from '../../components/Logo'
import ArrowDown from '../../assets/page/icons/arrowDown.svg'
import Save from '../../assets/page/icons/save.svg'
import YoutubeIcon from '../../assets/page/icons/youtube.svg'
import InstagramIcon from '../../assets/page/icons/instagram.svg'
import styles from './index.module.css'
import FacebookIcon from '../../assets/page/icons/facebook.svg' 
import SocialIcon from '../../components/SocialIcon'
import { SocialIconProps } from '../../utils/types'

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
          /* añadir redes sociales */
const socialNetworksList: Array<SocialIconProps> = [
    {
        url:'https://www.instagram.com/',
        icon: InstagramIcon,
        alt:'ir a nuestro instagram'
    },
    {
        url:'https://www.youtube.com/',
        icon: YoutubeIcon,
        alt:'ir a nuestro youtube'
    },
    {
        url:'https://www.facebook.com/',
        icon: FacebookIcon,
        alt:'ir a nuestro facebook'
    }
]

const NavBar = () => {

    return(
        <>
        <nav className='flex justify-around items-center w-full h-14 sticky top-0 '>
            <Logo isTitlePrimary={true}/>
            <ul className='flex justify-between w-2/5 xl:w-2/6'>
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
                    <Link to='/guardados' className='flex'>
                        Guardados 
                        <img className='ms-1' src={Save} alt=''/>
                    </Link> 
                </li>
                <li className={`text-sm ${styles.navListMove}`}>
                    <Link to='/acerca_de'>Acerca de</Link>
                </li>
                <li className={`text-sm ${styles.navListMove}`}>
                  <a href="">Reseñas</a> 
                </li>
            </ul>
            <div className='flex justify-around items-center w-32'>
                { 
                    socialNetworksList.map((el, index) => 
                        <SocialIcon 
                        key={index} 
                        icon={el.icon} 
                        url={el.url} 
                        alt={el.alt} />
                    )
                 }
            </div>
        </nav>
        <Outlet />
        </>
    )
}

export default NavBar