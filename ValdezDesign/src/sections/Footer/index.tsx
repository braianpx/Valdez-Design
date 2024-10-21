import NormalIcon from "../../components/NormalIcon"
import { icons } from "../../utils/icons";
import Logo from "../../components/Logo";

const Popup = ( ) : void => {
}


interface Links {
    linkName: string;
    icon?: string;
    redirect?: string;
    switchSelect?(element: string): void
}
interface FooterLinks {
    titleLinks: string;
    links: Array<Links>
}


const footerLinks: Array<FooterLinks> = [
    {
        titleLinks:"Siguenos",
        links:[
            {
                linkName:"Facebook",
                redirect:"https://m.facebook.com/"
            },
            {
                linkName:"Instagram",
                redirect:"https://www.instagram.com/",
            },
            {
                linkName:"Youtube",
                redirect:"https://www.youtube.com/",
            },
        ],
    },
    {
        titleLinks:"Recursos",
        links:[
            {
                linkName:"Términos y condiciones",
                switchSelect: Popup
            },
            {
                linkName:"Política de privacidad",
                switchSelect: Popup
            },
        ],
    },
    {
        titleLinks: "Contacto",
        links:[
            {
                linkName:"+ 54 381 201 9669",
                redirect:"https://wa.me/543812019669?text=Hola, visité su página web y quedé impresionado por los productos sublimados que ofrecen. Tengo algunas preguntas que me gustaría hacerles.",
                icon: icons.whatsApp
            },
            {
                linkName:"braivaldez16@gmail.com",
                redirect:"mailto:braivaldez16@gmail.com",
                icon: icons.email
            }
        ]
    }
    ]

const Footer = () => {
    return(
        <footer className="w-full bg-black lg:h-96 h-auto lg:gap-0 gap-4 mt-2 lg:pt-12 pt-6 flex lg:flex-row flex-col justify-around text-body absolute start-0">        
            <section className="h-3/4 flex flex-col ps-2 xl:p-0 justify-start xl:gap-2">
                <Logo isTitlePrimary={false} />
                <p className="xl:text-sm text-xs font-medium w-full">© {new Date().getFullYear()} Herrera Sublimacion. Todos los derechos reservados</p>
            </section>
            <div className="lg:w-3/5 w-full flex flex-wrap lg:justify-center lg:gap-4 justify-start">     
            {
                footerLinks?.map((el, i) => 
                    <section className="flex lg:w-1/4 w-1/2 flex-col lg:items-start items-center lg:gap-6 gap-1 lg:m-0 my-5">        
                        <h3 className="lg:text-2xl text-lg text-white font-semibold">{el.titleLinks}</h3>
                        <ul>
                        {
                            footerLinks[i]?.links.map(link => {
                                return link.switchSelect?
                                    <li className="my-2 lg:text-start text-center">
                                        <button className="text-body lg:text-start xl:text-base  text-sm bg-transparent font-normal p-0 hover:text-body hover:pl-4 hover:pb-3 transition-all duration-300" onClick={()=>{ link.switchSelect && link.switchSelect(link.linkName)}}>
                                            {link.linkName}
                                        </button>
                                    </li>
                                    : 
                                    <li className="my-2 lg:text-start text-center">
                                        <a className="text-body xl:text-base text-sm font-normal hover:text-body hover:pl-4 hover:pb-3 transition-all duration-300 inline-flex justify-start items-center gap-1" href={link.redirect || ""} target="_blank">
                                            {typeof link.icon == "string" && <NormalIcon icon={link.icon || icons.precaution} alt=""/> }
                                            {link.linkName}
                                        </a>
                                    </li>
                                }
                            )
                        }
                        </ul>
                    </section>
                )
            }
            </div>
        </footer>
    )
}

export default Footer
