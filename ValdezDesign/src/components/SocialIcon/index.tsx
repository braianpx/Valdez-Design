import { SocialIconProps } from "../../utils/types";

const SocialIcon = ({url, icon, alt}: SocialIconProps) => {

    const redirect  = (url: string) : void  => {
        window.open(url);
    }  
    return(
        <img 
        onClick={()=>redirect(url||"www.facebook.com")} 
        className="cursor-pointer transition-transform duration-300 hover:translate-x-1" 
        src={icon} 
        alt={alt} />   
    )
}

export default SocialIcon;