import { Link } from "react-router-dom"

const buttons = {
    default:"transition-all duration-500 border-2 font-normal rounded-md",
    primary:"bg-secondary text-white hover:bg-white hover:text-secondary border-secondary hover:translate-x-5",
    secondary:"border-black bg-black hover:bg-white text-white hover:text-secondary text-sm p-2 hover:border-semi-white hover:shadow-inner"
}

interface Buttons {
 button: "primary" | "secondary",
 text: string,
 redirect?: string,
}

const Button = ({button, text, redirect} :Buttons) =>  {
    const buttonClass = `${buttons.default} ${buttons[button] }`;
    return(
        <Link to={redirect || "/"}>
            <button 
            className={buttonClass} >
                {text}
            </button>
        </Link>
    )
}

export default Button