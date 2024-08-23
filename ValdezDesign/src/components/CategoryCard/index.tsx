import Button from "../Button"

interface CardCategory {
  name:string
  link:string
  img: string
}

const CategoryCard = ({name, link, img}: CardCategory) => {
  return(
    <div className="border-2 w-96 h-44 flex">
      <div className="w-1/2 h-full border-2 flex-col flex gap-5 justify-center items-center">
        <h3 className="text-xl text-white">{name}</h3>
        <Button button="secondary" redirect={link} text={`Ver Productos`} />
      </div>
      <figure className="w-1/2 h-full">
        <img className="object-cover" src={img} alt="" />
      </figure>
    </div>
  )
}
export default CategoryCard