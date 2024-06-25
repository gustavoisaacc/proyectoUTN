import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useUsers } from "../../context/useAuth";
import { useNavigate } from "react-router-dom";


const BtnUser = (id) => {
    const {deleteUser} = useUsers()
    const navigate = useNavigate();
    const handleDelete = async(id)=> {
        await deleteUser(id)
       console.log(id)
    }
    return (
        <>
            <div className="flex">
                <button 
                onClick={()=> navigate("?updateUser=true")}
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

export default BtnUser;