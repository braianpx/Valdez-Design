import LogoSvg from '../../assets/page/icons/logo.svg'

interface Props {
    isTitlePrimary: boolean
}

const Logo = ({isTitlePrimary}: Props) => {
    return(
        <div className='flex items-center justify-around w-36 px-2'>
            <img src={LogoSvg} alt='' className={isTitlePrimary?'w-10' : 'w-14'} />
            {
                isTitlePrimary?
                <h1 className='text-xl relative top-1 font-bold text-primary cursor-default'> 
                    Herrera 
                    <br />
                    <span className='relative text-lg bottom-3 left-1 text-textPrimary'>
                        Sublimacion
                    </span>
                </h1>
                :
                <p className='text-2xl relative top-1 font-bold text-primary cursor-default text-contorn'> 
                    Herrera 
                    <br />
                    <span className='relative shadow-white shadow-2xl text-xl bottom-3 left-1 text-textPrimary text-contorn'>
                        Sublimacion
                    </span>
                </p>
            }
            
        </div>
    )
}
export default Logo