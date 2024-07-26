
const buttons = {
    default:'hover:translate-x-5 transition-all duration-500 font-normal border-2',
    primary:'bg-secondary text-white rounded-md hover:bg-white hover:text-secondary border-secondary',
    secondary:''
}

export interface Buttons {
 button: 'primary' | 'secondary',
 text: string
}

const Button = ({button, text} :Buttons) => {
    return(
        <button 
        className={`${buttons.default} ${buttons[button] }`} >
            {text}
        </button>
    )
}

export default Button