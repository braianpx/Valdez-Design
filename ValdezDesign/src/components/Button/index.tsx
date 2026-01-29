import { Link } from "react-router-dom"

const buttons = {
    default:"transition-all duration-500 border-2 font-normal rounded-md p-2",
    primary:"bg-secondary text-white text-lg px-3 hover:bg-white hover:text-secondary border-secondary hover:translate-x-5",
    secondary:"border-black bg-black hover:bg-white text-white hover:text-black text-sm hover:border-black hover:shadow-inner"
}

interface Buttons {
 button: "primary" | "secondary",
 text: string,
 redirect?: string,
 isLink: boolean,
 functionClick?: () => void,
}

const Button = ({button, text, redirect, isLink, functionClick} :Buttons) =>  {
    const buttonClass = `${buttons.default} ${buttons[button] }`;
    return(
      <>
        {
          isLink?
            <Link 
              to={redirect || "/"} 
              className={buttonClass}
            >  
              {text}
            </Link>
          :
          <button 
          className={buttonClass}
          onClick={functionClick}
          >
            {text}
          </button>
        }
     </>
    )
}

export default Button