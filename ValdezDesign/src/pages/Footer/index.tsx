import NormalIcon from "../../components/NormalIcon"
import { icons } from "../../utils/icons";
import Logo from "../../components/Logo";

const functionChillona = () : void => {
    console.log("holaaa jejej")
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
                switchSelect: functionChillona
            },
            {
                linkName:"Política de privacidad",
                switchSelect: functionChillona
            },
        ],
    },
    {
        titleLinks: "Contacto",
        links:[
            {
                linkName:"+ 54 381 192 3293",
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
        <footer className="w-full bg-black h-96 mt-36 flex justify-around text-body absolute start-0">        
            <section className="w-2/5 h-full flex flex-col justify-center pb-28 gap-6 ms-16">
                <div className="flex flex-col items-center w-1/3 rounded-2xl">
                    <Logo isTitlePrimary={false} />
                </div>
                    <p className="ps-3 text-sm font-medium w-full">© {new Date().getFullYear()} Herrera Sublimacion. Todos los derechos reservados</p>
            </section>             
            {
                footerLinks?.map((el, i) => 
                    <section className=" w-2/12 flex flex-col items-start pt-24 gap-6">
                    <h3 className="text-2xl text-white font-semibold">{el.titleLinks}</h3>
                        <ul className="flex flex-col gap-2">
                        {
                            footerLinks[i]?.links?.map(link => {
                                return link?.switchSelect?
                                    <li>
                                        <button className="text-body text-lg bg-transparent font-normal block p-0 hover:pl-4 hover:pb-3 transition-all duration-300" onClick={()=>{ link.switchSelect?(link.linkName) : null }}>
                                            {link.linkName}
                                        </button>
                                        
                                    </li>
                                 : 
                                    <li>
                                        <a  className="text-body text-lg font-normal hover:text-body hover:pl-4 hover:pb-3 transition-all duration-300 flex items-center gap-2" href={link.redirect || ""} target="_blank">
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
        </footer>
    )
}

export default Footer