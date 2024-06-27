import CounterButton from "./ui/botonContador";
import { useProduct } from "../context/useAuth";
import { useState } from "react";


const MenuCardsOrden = ({ items }) => {
//   const { car,agregarcar, getByIdProduct } = useProduct()
//   const handleCar = async (id) => {
//     const e = await getByIdProduct(id)
//     agregarcar(e)
//   console.log(car)

//   }
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 `}>
      <img
        src="https://i0.wp.com/www.gastongbg.com/wp-content/uploads/2022/04/Compartido-desde-Lightroom-mobile-e1648940739620.jpg?fit=1920%2C1082&ssl=1"
        alt="Producto"
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div>
        <h1 className="text-xl font-bold mt-2">{items.name}</h1>
        <div className="flex justify-between items-center">
          <p className="">{items.description}</p>
          <h2 className="text-orange-650 font-bold mt-2">$ {items.price}</h2>
        </div>
        <div className="flex justify-center flex-col">
          <button
            // onClick={() => handleCar(items._id)}
            className="border-2 border-primary bg-primary text-white px-3 py-1 rounded-2xl my-2">
            AGREGAR
          </button>
          <CounterButton />
        </div>
      </div>
    </div>
  );
};

export default MenuCardsOrden;
