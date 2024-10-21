import Button from "../Button"

interface CardCategory {
  name:string
  link:string
  img: string
}

const CategoryCard = ({name, link, img}: CardCategory) => {
  return(
    <div className="w-96 h-44 flex shadow-inner border border-semi-white">
      <div className="w-1/2 h-full flex-col flex gap-10 justify-center items-center">
        <h3 className="text-2xl text-contorn underline decoration-secondary text-black">{name}</h3>
        <Button button="secondary" redirect={link} text={`Ver Productos`} />
      </div>
      <figure className="w-1/2 h-full bg-tertiary shadow-sm">
        <img className="object-cover" src={img} alt="" />
      </figure>
    </div>
  )
}
export default CategoryCard