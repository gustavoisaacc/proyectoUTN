import Li from "../ui/Li";

function Product({ item }) {
  return (
    <Li className="grid-cols-5 px-5">
      <span>imagen</span>
      <span>{item.name}</span>
      <span>{item.category.map((item) => item.name)}</span>
      <span>{item.price}</span>
    </Li>
  );
}

export default Product;
