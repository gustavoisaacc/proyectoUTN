import { useEffect } from "react";
import MenuCardsOrden from "../components/menuCardsOrden";
import BtnMenuLista from "../components/ui/btnMenuLista";
import { useProduct } from "../context/useAuth";

const MenuLista = (props) => {
  const { filter, getProducts, error } = useProduct();
  useEffect(() => {
    getProducts();
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
              return <MenuCardsOrden key={items.id} items={items} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default MenuLista;
