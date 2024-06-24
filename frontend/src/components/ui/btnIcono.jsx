import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const BtnIcono = () => {
    return (
        <>
            <div className="flex">
                <div className="mx-4">
                    <FiEdit size={20} />
                </div>
                <div className="mx-4">
                    <MdDelete size={25} />
                </div>
            </div>
        </>
    )
}

export default BtnIcono;