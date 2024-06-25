import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useCategory } from "../../context/useAuth";


const BtnCategoria = (id) => {
    const {deleteCategory} = useCategory()
    const navigate = useNavigate();
    const handleDelete = async(id)=> {
        await deleteCategory(id)
        navitage("/dashboard");
    }
    return (
        <>
            <div className="flex">
                <button 
                onClick={()=> navigate("?updateCategory=true")}
                className="mx-4">
                    <FiEdit size={20} />
                </button>
                <button 
                onClick={()=>handleDelete(id)}
                className="mx-4">
                    <MdDelete size={20} />
                </button>
            </div>
        </>
    )
}

export default BtnCategoria;