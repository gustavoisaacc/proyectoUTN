import P from "./ui/p"
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <footer className="flex justify-around bg-primary p-20 text-white">
                <span><P name="RIVADAVIA 1050"/></span>
                <span className="flex gap-5 items-center"><ImFacebook2 size={40}/> <FaInstagramSquare size={45} /></span>
                <span><P name="COPYRIGHT COODE"/></span>
            </footer>
        </>
    )
}

export default Footer