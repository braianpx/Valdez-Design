import { SocialIconProps } from "../../utils/types";

const NormalIcon = ({icon, alt}: SocialIconProps) => {

    return(
        <img 
        src={icon} 
        alt={alt} />   
    )
}

export default NormalIcon;