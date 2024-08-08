import { icons } from "../../utils/icons"

interface Props {
    isTitlePrimary: boolean
}

const Logo = ({isTitlePrimary}: Props) => {
    return(
        <div className="flex items-center justify-start w-40">
            <img src={icons.logo} alt="" className={isTitlePrimary?"w-10" : "xl:w-14 w-11"} />
            {
                isTitlePrimary?
                <h1 className="text-xl relative top-1 font-bold text-primary cursor-default"> 
                    Herrera 
                    <br />
                    <span className="relative text-lg bottom-3 left-1 text-textPrimary">
                        Sublimacion
                    </span>
                </h1>
                :
                <p className="xl:text-xl text-lg relative top-1 font-bold text-primary cursor-default text-contorn"> 
                    Herrera 
                    <br />
                    <span className="relative shadow-white shadow-2xl text-lg bottom-3 left-1 text-textPrimary text-contorn">
                        Sublimacion
                    </span>
                </p>
            }
            
        </div>
    )
}
export default Logo