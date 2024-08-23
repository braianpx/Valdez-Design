import { Link } from "react-router-dom"

const buttons = {
    default:"transition-all duration-500 font-normal border-2 rounded-md",
    primary:"bg-secondary text-white hover:bg-white hover:text-secondary border-secondary hover:translate-x-5",
    secondary:"bg-black hover:bg-white text-white hover:text-black text-sm"
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