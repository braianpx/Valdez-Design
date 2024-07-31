import { Outlet } from "react-router-dom"
import { useState } from "react"
import { getAllProducts } from "../../utils/HTTP-Api"
import { Products } from "../../utils/types"


const Home = () => {
const [products, setProducts] = useState<Products["Product"]>([])

const met = () => {
    setProducts(getAllProducts)
}
    return(
        <div className="">
        <Outlet/>
        <button onClick={met}>boton</button>
        {products[0] ? (
  <ul>   
    {products.map((product) => (
      <li key={product.id}>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Categories: {product.categories.join(', ')}</p>
      </li>
    ))}
  </ul>
) : (
  <p>No products available</p>
)}

        </div>
    )
}
export default Home