import { useEffect } from "react";
import { useProduct } from "../../context/useAuth";

export default function Button(props) {
  const { filteredProducts } = useProduct();

  useEffect(() => {
    filteredProducts();
  }, []);

  const handleClick = () => {
    filteredProducts(props.name.toLowerCase());
  };

  return (
    <button
      onClick={handleClick}
      className={` w-full border border-primary  px-5 py-2 rounded-md text-md md:text-sm font-semibold uppercase  ${props.className}`}
    >
      {props.name}
    </button>
  );
}
