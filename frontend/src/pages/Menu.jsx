import { useEffect } from "react";
import MenuCardsOrden from "../components/menuCardsOrden";
import BtnMenuLista from "../components/ui/btnMenuLista";
import { useProduct } from "../context/useAuth";

const MenuLista = (props) => {
  const { products, filter, getProducts, error } = useProduct();
  useEffect(() => {
    getProducts();
  }, []);

  console.log(error);
  return (
    <>
      <div>
        <BtnMenuLista />
        <div className="grid grid-cols-2 gap-8 bg-secundary h-full">
          {!error
            ? filter.map((items) => {
                return <MenuCardsOrden key={items.id} items={items} />;
              })
            : products.map((items) => {
                return <MenuCardsOrden key={items.id} items={items} />;
              })}
        </div>
      </div>
    </>
  );
};

export default MenuLista;
