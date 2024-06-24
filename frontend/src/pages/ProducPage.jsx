import ListProduct from "../components/products/ListProduct";
import MenuNewItem from "../components/products/MenuNewItem";
import AddProductModal from "../components/products/AddProductModel";
import AddCategoryModal from "../components/products/AddCategoryModal";
import ListCategory from "../components/products/ListCategory";

function ProducPage() {
  return (
    <div className="w-[95%] m-auto my-10">
      <MenuNewItem
        name="Producto"
        item="Categoria"
        path="newcategory"
        path1="newproduct"
      />
      <div className="md:flex gap-5">
        <ListProduct />
        <ListCategory />
      </div>
      <AddProductModal />
      <AddCategoryModal />
    </div>
  );
}

export default ProducPage;
