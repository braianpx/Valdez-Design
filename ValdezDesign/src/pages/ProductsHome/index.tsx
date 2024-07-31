import ImgProductsHome from '../../assets/page/perfil-productos.png'
import Button from '../../components/Button'

const ProductsHome = () => {
    return(
        <div className="flex flex-row w-full border-y-2 border-dashed border-blue items-center py-20">
            <div className="flex flex-col w-1/2 h-full gap-5 pb-14 items-center justify-center">
                <h2 className="text-4xl font-bold text-black cursor-default text-center">
                Nuestros  <span className='underline decoration-secondary'> Productos </span>
                </h2>
                <p className='w-1/2 mb-14 ms-8'>Mira los distintos tipos de productos <span className='text-secondary'>sublimados</span> que tenemos para ti.</p>
                <Button button='primary' text='Ver categorias'/>
            </div>
            <div className="w-1/2 h-full flex justify-start items-center">
                <img src={ImgProductsHome} alt="" className="w-10/12 h-96 object-cover  border-pastel-purple border-opacity-20 border-2 rounded-md shadow-sm shadow-pastel-purple" />
            </div>
        </div>
    )
}
export default ProductsHome