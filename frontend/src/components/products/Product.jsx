import React from "react";
import Li from "../ui/Li";

function Product({ item }) {
  return (
    <Li className="grid-cols-5 px-5">
      <span>{item.image}</span>
      <span>name</span>
      <span>{item.category}</span>
      <span>{item.name}</span>
      <span>{item.image}</span>
    </Li>
  );
}

export default Product;
