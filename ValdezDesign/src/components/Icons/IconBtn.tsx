import { IconProps } from "../../utils/types";
import IconImg from "./IconImg";

const IconBtn = ({url, icon, alt}: IconProps) => {

  const redirect  = (redirect: string) : void  => {
      window.open(redirect);
  }  
  return(
    <button
      className="inline-flex items-center justify-center bg-transparent cursor-pointer transition-transform duration-300 hover:translate-x-1 p-0"
      aria-label={alt}
      onClick={() => redirect(url || "")}
    >
      <IconImg
        icon={icon}
        alt={alt}
        stylesIcon="w-full h-full"
      />
    </button>

    )
}

export default IconBtn;