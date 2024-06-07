import { useNavigate } from "react-router-dom";
import { products } from "../../utils/mockup";
import AddTaskModal from "./AddTaskModel";
import Product from "./Product";
import Li from "../ui/Li";

function ListProduct() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between mb-10">
        <h1 className="text-secundary font-semibold text-4xl">Productos</h1>
        <button
          onClick={() => navigate("?newproduct=true")}
          className="bg-secundary text-white rounded-lg px-5 py-2"
        >
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
      <AddTaskModal />
    </>
  );
}

export default ListProduct;
