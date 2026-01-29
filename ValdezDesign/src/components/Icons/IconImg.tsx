import { IconProps } from "../../utils/types";

const IconImg = ({icon, alt, stylesIcon}: IconProps) => {
    return(
        <img 
          src={icon} 
          alt={alt}
          className={stylesIcon}
        />   
    )
}

export default IconImg;