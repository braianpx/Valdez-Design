import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../utils/HTTP-Api";
import CategoryCard from "../../components/CategoryCard/index";
import { utilsImages } from "../../utils/images";
import Button from "../../components/Button";

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(0); // Controla el número de categorías visibles

  useEffect(() => {
    const getCategories = async () => {
      setCategories(await getAllCategories());
    };
    getCategories();
  }, []);

  // Ajusta el número de categorías visibles al cambiar el tamaño de la pantalla
  useEffect(() => {
    handleShowLess();
    window.addEventListener("resize", handleShowLess);
    return () => window.removeEventListener("resize", handleShowLess);
  }, []);

  const handleShowMore = () => {
    setVisibleCount(categories.length); // Muestra todas las categorías
  };

  const handleShowLess = () => {
    setVisibleCount(window.innerWidth < 768 ? 4 : 6); // Restringe según el tamaño de pantalla
  };

  return (
    <section className="w-full flex flex-col items-center text-black">
      <div className="w-full flex flex-col items-end mb-10">
        <h2 
          className="underline decoration-secondary md:text-start pt-8 pb-1 text-center md:w-[96%] w-full lg:text-4xl text-3xl font-bold text-black cursor-default">
          Categorias
        </h2>
        <p className="w-full text-base text-center md:text-start md:w-[96%]">
          <span className="text-secondary"> • </span>
          Mira los distintos tipos de 
          <span className="text-secondary"> productos </span>
          que tenemos para 
          <span className="text-secondary"> ti </span>
          <span className="text-secondary"> • </span>
        </p>
      </div>
      <div className="lg:gap-8 gap-4 flex 2xl:w-[80%] flex-wrap 2xl:justify-start justify-center">
        {categories?.slice(0, visibleCount).map((category) => (
          <CategoryCard 
            key={category} 
            name={category} 
            link={`/productos/${category}`} 
            img={utilsImages.cup || ''} 
          />
        ))}
      </div>
      {categories.length > (window.innerWidth < 768 ? 4 : 6) && (
        <Button 
          isLink={false}
          button="primary"
          functionClick={categories.length > visibleCount ? handleShowMore : handleShowLess}
          text={categories.length > visibleCount ? "Ver más" : "Ver menos"}
        />
      )}
    </section>
  );
};

export default Categories;
