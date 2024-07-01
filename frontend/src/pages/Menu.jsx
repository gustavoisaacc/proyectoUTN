import { useEffect, useState } from "react";
import MenuCardsOrden from "../components/menuCardsOrden";
import BtnMenuLista from "../components/ui/btnMenuLista";
import { useProduct } from "../context/useAuth";
import AddPagoModal from "../components/carrito/AddPagoModal";
import { ToastContainer } from "react-toastify";

const MenuLista = () => {
  const { filteredProducts, filter, getProducts, error } = useProduct();

  const [count, setCount] = useState(1);

  useEffect(() => {
    getProducts();
    filteredProducts();
  }, []);

  return (
    <>
      <div>
        <BtnMenuLista />
        <div className="grid grid-cols-2 gap-8 bg-secundary h-full">
          {error ? (
            <p className="w-full h-[500px] flex items-center justify-center ">
              <span className="font-semibold text-2xl  ">No hay productos</span>
            </p>
          ) : (
            filter.map((items) => {
              return (
                <MenuCardsOrden
                  key={items.id}
                  items={items}
                  count={count}
                  setCount={setCount}
                />
              );
            })
          )}
        </div>
      </div>
      <AddPagoModal />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default MenuLista;
