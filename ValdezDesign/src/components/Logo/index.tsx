import LogoSvg from '../../assets/page/icons/logo.svg'

interface Props {
    isTitlePrimary: boolean
}

const Logo = ({isTitlePrimary}: Props) => {
    return(
        <div className='flex items-center justify-around'>
            <img src={LogoSvg} alt='' className='w-10' />
            {
                isTitlePrimary?
                <h1 className='text-lg relative top-1 font-bold text-primary cursor-default'> 
                    Valdez 
                    <br />
                    <span className='relative text-base bottom-3 left-1 text-textPrimary'>
                        Sublimacion
                    </span>
                </h1>
                :
                <p className='text-lg relative top-1 font-bold text-primary cursor-default'> 
                    Valdez 
                    <br />
                    <span className='relative text-base bottom-3 left-1 text-textPrimary'>
                        Sublimacion
                    </span>
                </p>
            }
            
        </div>
    )
}
export default Logo