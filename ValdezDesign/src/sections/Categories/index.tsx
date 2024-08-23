import React, { useEffect, useState } from "react"
import { getAllCategories } from "../../utils/HTTP-Api"
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { utilsImages } from "../../utils/images";

const Categories: React.FC = () => {
const [categories, setCategories] = useState<string[]>([]);

useEffect(()=>{
  const getCategories = async ()  => {
    setCategories(await getAllCategories())
  } 
  getCategories()
},[])

  return( 
    <div className="w-vh">
      <h2>Categorias</h2>
      <p>Mira los distintos tipos de productos que tenemos para ti</p>
      {categories[0] && categories.map(category => (
        <CategoryCard name={category} link={`/productos/${category}`} img={utilsImages.cup || ''}/>
      ))}
    </div>
  )
}

export default Categories