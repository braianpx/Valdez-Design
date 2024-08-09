import { Link, Outlet } from "react-router-dom"
import Logo from "../../components/Logo"
import styles from "./index.module.css"
import SocialIcon from "../../components/SocialIcon"
import { SocialIconProps } from "../../utils/types"
import { icons } from "../../utils/icons"
import { useState, useEffect } from "react"

interface ProductsLinks {
    name: string,
    to: string;
}

interface LinkNav {
    linkName: string;
    to?:string;
    extraLinks?: ProductsLinks[];
    icon?: string
}

const linksNav: LinkNav[] = [
    { 
        linkName: "Inicio" ,
        to: "/",
    },
    {
        linkName: "Productos" ,
        extraLinks: [
            {
                name: "Ver todos",
                to: `/productos/todos`
            },
            {
                name: "Personalizados",
                to: "/productos/personalizados"
            }
        ],
        icon: icons.arrowDown,
    },
    {
        linkName: "Guardados" ,
        to: "/guardados",
        icon: icons.save,
    },
    {
        linkName: "Acerca de" ,
        to: "/acerca_de",
    },
    {
        linkName: "Reseñas" ,
    }
]

const socialNetworksList: Array<SocialIconProps> = [
    {
        url: "https://www.instagram.com/",
        icon: icons.instagram,
        alt: "ir a nuestro instagram"
    },
    {
        url: "https://www.youtube.com/",
        icon: icons.youtube,
        alt: "ir a nuestro youtube"
    },
    {
        url: "https://www.facebook.com/",
        icon: icons.facebook,
        alt: "ir a nuestro facebook"
    }
]

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)
    const [menuProductsOpen, setMenuProductsOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        }

        const handlePopState = () => {
            if (isMenuOpen) {
                setIsMenuOpen(false)
                setMenuProductsOpen(false)
            }
        }
        window.addEventListener("resize", handleResize)
        window.addEventListener("popstate", handlePopState)
        if (isMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("popstate", handlePopState)
            document.body.style.overflow = ""
        }
    }, [isMenuOpen])

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            window.history.pushState(null, "", "");
        } else {
            setMenuProductsOpen(false)
            window.history.back()
        }
    };
    const callBackLink = (link: LinkNav) => {
        link?.extraLinks?
        setMenuProductsOpen(!menuProductsOpen):
        setIsMenuOpen(false)
    }

    return (
        <>
            <nav className="flex justify-between w-full h-14 fixed shadow-md top-0 bg-white z-10 items-center px-4 lg:justify-around lg------------------------------------------------------------------------------------..............:px-0">
                <Logo isTitlePrimary={true} />
                <div className="lg:hidden">
                    <button onClick={handleMenuToggle} className="focus:outline-none bg-pastel-purple">
                        <div className="space-y-2">
                            <span className={`block w-8 h-0.5 bg-black transform transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                            <span className={`block w-8 h-0.5 bg-black transition duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-8 h-0.5 bg-black transform transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                        </div>
                    </button>
                </div>
                <ul className={`h-[92.5%] flex gap-4 flex-col justify-start fixed top-14 right-0 w-3/4 bg-white shadow-md p-4 lg:shadow-none lg:p-0 lg:flex-row lg:justify-center lg:items-center lg:static lg:w-1/2 lx:w-2/5 xl:gap-8
                    ${isMobile?` transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`: "" } `}>
                    {linksNav[0] && linksNav?.map(link => (
                        <li 
                            className={`md:text-base text-2xl ${styles.navListMove} ${link.extraLinks && "relative"}`} 
                            id={link.extraLinks&& isMobile? '' : styles.dropdown} >
                            {
                            link?.to?
                            <Link to={link.to || "/"} className={link.icon && "flex"} onClick={() => setIsMenuOpen(false)}>
                                {link.linkName}
                                {link.icon && <img className="ms-1" src={link.icon} alt="arrow-down-icon" />}
                            </Link>
                            :
                            <><a className={`flex ${styles.navListMove} cursor-pointer`} onClick={()=> callBackLink(link)} >
                                {link.linkName}
                                {link.icon && <img className="ms-1" src={link.icon} alt="arrow-down-icon" />}
                            </a>
                                {link.extraLinks &&
                                <ul className={`${isMobile && menuProductsOpen? "block" : "hidden"} lg:absolute lg:top-full left-0 bg-slate-300 p-2.5 cursor-pointer md:w-40 rounded-e-full bg-white shadow-md`} id={styles.dropdownContent}>
                                    {link?.extraLinks.map((extralink, i) => 
                                        <li className="md:text-base text-2xl hover:ms-3 hover:mb-1 transition-all duration-250" key={i}>
                                            <Link to={extralink.to} onClick={() => setIsMenuOpen(false)}>{extralink.name}</Link>
                                        </li>
                                    )}
                                </ul>   
                                }
                            </>
                            }
                        </li>
                        ))
                    }
                </ul>
                {!isMobile &&
                    <div className="flex justify-around items-center w-32">
                        {socialNetworksList.map((el, index) => (
                            <SocialIcon
                                key={index}
                                icon={el.icon}
                                url={el.url}
                                alt={el.alt}
                            />
                        ))}
                    </div>
                }
            </nav>
            <Outlet />
        </>
    );
}

export default NavBar
