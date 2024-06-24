import Li from "../ui/Li";
import BtnIcono from "../ui/btnIcono";

function Product({ item }) {
  return (

    <>
      <Li className="grid-cols-5 px-5">
        <span></span>
        <span>{item.name}</span>
        <span>{item.category.map((item) => item.name)}</span>
        <span>{item.price}</span>
        <button><BtnIcono /></button>
      </Li>
    </>
    
  );
}

export default Product;
