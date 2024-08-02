import { Link, Outlet } from 'react-router-dom'
import Logo from '../../components/Logo'
import styles from './index.module.css'
import SocialIcon from '../../components/SocialIcon'
import { SocialIconProps } from '../../utils/types'
import { icons } from '../../utils/icons'

const productsLinks = [
    {
        name: 'Ver todos',
        to: `/productos/${'todos'}`
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
        icon: icons.instagram,
        alt:'ir a nuestro instagram'
    },
    {
        url:'https://www.youtube.com/',
        icon: icons.youtube,
        alt:'ir a nuestro youtube'
    },
    {
        url:'https://www.facebook.com/',
        icon: icons.facebook,
        alt:'ir a nuestro facebook'
    }
]

const NavBar = () => {

    return(
        <>
        <nav className='flex justify-around items-center w-full h-14 fixed top-0 bg-white z-10'>
            <Logo isTitlePrimary={true}/>
            <ul className='flex justify-between w-2/5 xl:w-2/6'>
                <li className={`text-base ${styles.navListMove}`}>
                    <Link to='/'>Inicio</Link>
                </li>
                <li className='relative cursor-pointer text-base' id={styles.dropdown}>          
                    <a className={`flex ${styles.navListMove}`}>
                        Productos 
                        <img className='ms-1' src={icons.arrowDown} alt="arrow-down-icon" />
                    </a>
                    <ul className='hidden absolute top-full left-0 bg-slate-300 p-2.5 cursor-pointer w-52' id={styles.dropdownContent}>
                        {
                            productsLinks.map((el, i)=> 
                                <li className=' text-base hover:ms-3 hover:mb-1 transition-all duration-250' key={i}>
                                    <Link to={el.to}>{el.name}</Link>
                                </li>
                            )
                        }
                    </ul>
                </li>
                <li className={`flex ${styles.navListMove} text-base`}>
                    <Link to='/guardados' className='flex'>
                        Guardados 
                        <img className='ms-1' src={icons.save} alt=''/>
                    </Link> 
                </li>
                <li className={`text-base ${styles.navListMove}`}>
                    <Link to='/acerca_de'>Acerca de</Link>
                </li>
                <li className={` text-base ${styles.navListMove}`}>
                  <a href="">Reseñas</a> 
                </li>
            </ul>
            <div className='flex justify-around items-center w-32'>
                { 
                    socialNetworksList[0] && socialNetworksList?.map((el, index) => 
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
