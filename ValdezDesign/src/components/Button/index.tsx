import { Link } from "react-router-dom"
import React from "react"

const buttons = {
    default:'hover:translate-x-5 transition-all duration-500 font-normal border-2',
    primary:'bg-secondary text-white rounded-md hover:bg-white hover:text-secondary border-secondary',
    secondary:''
}

interface Buttons {
 button: 'primary' | 'secondary',
 text: string,
 redirect?: string,
}

const Button = ({button, text, redirect} :Buttons): React.FunctionComponent =>  {
    const buttonClass = `${buttons.default} ${buttons[button] }`;
    return(<div className="">
        <Link to={redirect || '/'}>
            <button 
            className={buttonClass} >
                {text}
            </button>
        </Link>
        </div>
    )
}

export default Button