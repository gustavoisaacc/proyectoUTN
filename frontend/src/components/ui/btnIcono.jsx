import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useProduct } from "../../context/useAuth";
import { useNavigate } from "react-router-dom";


const BtnIcono = (id) => {
    const {deleteProduct} = useProduct()
    const navigate = useNavigate();
    const handleDelete = async(id)=> {
        await deleteProduct(id)
        navitage("/dashboard");
    }
    return (
        <>
            <div className="flex">
                <button 
                onClick={()=> navigate(`?updateUser=true?id=${id.id}`)}
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

export default BtnIcono;