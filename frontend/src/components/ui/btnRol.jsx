import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useRole } from "../../context/useAuth";
import { useNavigate } from "react-router-dom";


const BtnRol = (id) => {
    const {deleteRol} = useRole()
    const navigate = useNavigate();
    const handleDelete = async(id)=> {
        await deleteRol(id)
        navitage("/dashboard");
    }
    return (
        <>
            <div className="flex">
                <button 
                onClick={()=> navigate("?updateRole=true")}
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

export default BtnRol;