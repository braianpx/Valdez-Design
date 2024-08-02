import { useState } from "react"
import { getAllProducts } from "../../utils/HTTP-Api"
import { Product } from "../../utils/types"

const Products = () =>{

const [products, setProducts] = useState<Product[]>([])

const met = async ()  => {
    setProducts(await getAllProducts())
}
    
    return(
        <div className="">
            <h2>ESTO ES PRODUCTOS</h2>
            <p>filtro</p>
            <p>Mapeo de productos</p>
            <button onClick={met}>boton</button>
            {products[0] ? (
            <ul>   
                {products.map((product) => (
                <li key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>Categories: {product.categories.join(", ")}</p>
                </li>
                ))}
            </ul>
            ) : (
            <p>No products available</p>
            )}
        </div>
    )
}
export default Products