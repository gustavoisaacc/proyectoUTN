import { products } from "../../utils/mockup";
import Li from "../ui/Li";
import Product from "./Product";

function ListProduct() {
  return (
    <>
      <div className="flex justify-between mb-10">
        <h1 className="text-secundary font-semibold text-4xl">Productos</h1>
        <button className="bg-secundary text-white rounded-lg px-5 py-2">
          Nuevo Producto
        </button>
      </div>
      <ul className="border rounded-md">
        <Li className="grid-cols-5 px-5">
          <span>imagen</span>
          <span>Nombre</span>
          <span>categoria</span>
          <span>Precio</span>
          <span>Acciones</span>
        </Li>
        {products.map((indx, item) => {
          return <Product key={indx} item={item} />;
        })}
      </ul>
    </>
  );
}

export default ListProduct;
