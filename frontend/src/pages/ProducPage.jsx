import ListProduct from "../components/products/ListProduct";
import MenuNewItem from "../components/products/MenuNewItem";
import AddProductModal from "../components/products/AddProductModel";
import AddCategoryModal from "../components/products/AddCategoryModal";
import ListCategory from "../components/products/ListCategory";
import { useCategory, useProduct } from "../context/useAuth";
import AddUpdateModal from "../components/products/AddUpdateModal";
import AddUpdateCategoryModal from "../components/products/AddUpdateCategoryModal";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

function ProducPage() {
  const { products, getProducts } = useProduct();
  const { categories, getCategories } = useCategory();

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  return (
    <div className="w-[95%] m-auto my-10">
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
      <MenuNewItem
        name="Producto"
        item="Categoria"
        path="newcategory"
        path1="newproduct"
      />
      <div className="md:flex gap-5">
        <ListProduct products={products} />
        <ListCategory categories={categories} />
      </div>
      <AddProductModal />
      <AddCategoryModal />
      <AddUpdateModal />
      <AddUpdateCategoryModal />
    </div>
  );
}

export default ProducPage;
