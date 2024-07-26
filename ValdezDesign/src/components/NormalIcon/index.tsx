import { SocialIconProps } from "../../utils/types";

const NormalIcon = ({icon, alt}: SocialIconProps) => {

    return(
        <img 
        className='cursor-pointer' 
        src={icon} 
        alt={alt} />   
    )
}

export default NormalIcon;