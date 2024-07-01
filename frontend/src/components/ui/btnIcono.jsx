import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useAuth, useProduct } from "../../context/useAuth";
import { useNavigate } from "react-router-dom";

const BtnIcono = (id) => {
  const { deleteProduct } = useProduct();
  const { superAdmin } = useAuth();
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar este elemento?"
    );
    if (confirmDelete) {
      await deleteProduct(id);
      alert("se elimino correctamente");
      navigate("/dashboard");
    }
  };
  const isDesactivated = !superAdmin ? true : false;
  return (
    <>
      <div className="flex">
        <button
          onClick={() => navigate(`?updateproduct=true&id=${id.id}`)}
          className="mx-4"
        >
          <FiEdit size={20} />
        </button>
        <button
          disabled={isDesactivated} // solo superadmin puede eliminar productos
          onClick={() => handleDelete(id)}
          className="mx-4"
        >
          <MdDelete size={20} />
        </button>
      </div>
    </>
  );
};

export default BtnIcono;
