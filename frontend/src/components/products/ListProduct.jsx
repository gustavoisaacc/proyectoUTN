import Li from "../ui/Li";

import { useProduct } from "../../context/useAuth";
import { useEffect } from "react";

function ListProduct() {
  const { products, getProducts } = useProduct();
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <ul className="w-full border rounded-md">
        <h1 className=" font-semibold border-b-2 text-center p-5 ">
          Productos
        </h1>
        <Li className="grid-cols-5 px-5">
          <span>imagen</span>
          <span>Nombre</span>
          <span>categoria</span>
          <span>Precio</span>
          <span>Acciones</span>
        </Li>
        {Array.isArray(products) ? (
          products.map((item) => {
            return (
              <Li className="grid-cols-5 px-5" key={item.id}>
                <span>imagen</span>
                <span>{item.name}</span>
                <span>
                  {Array.isArray(item.category)
                    ? item.category.map((item) => item.name)
                    : "no hay categorias"}
                </span>
                <span>{item.price}</span>
              </Li>
            );
          })
        ) : (
          <h1>cargando...</h1>
        )}
      </ul>
    </>
  );
}

export default ListProduct;
