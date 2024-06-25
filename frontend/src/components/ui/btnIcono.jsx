import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useProduct } from "../../context/useAuth";

const BtnIcono = (id) => {
    const {deleteProduct} = useProduct()
    const handleEvent = async(id)=> {
        await deleteProduct(id)
       console.log(id)
    }
    return (
        <>
            <div className="flex">
                <button 
                onClick={()=>handleEvent(id)}
                className="mx-4">
                    <FiEdit size={20} />
                </button>
                <button className="mx-4">
                    <MdDelete size={20} />
                </button>
            </div>
        </>
    )
}

export default BtnIcono;