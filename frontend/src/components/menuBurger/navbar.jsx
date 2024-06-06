import { useState } from "react"
import "../menuBurger/menuBurger.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="nadvar">
            <div className="nav-logo">coode</div>
            <div className={`nav-item ${isOpen && "open"}` }>
                <a href="">INICIO</a>
                <a href="">CONTACTO</a>
                <a href="">ACERCA DE</a>
                <a href="">INFORMACION</a>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={()=>setIsOpen((state)=> !state)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Navbar







//import "../utils/navegacion"
//import { navegacion } from "../utils/navegacion"
//import "../Style/menuBurger.css"
//import img from "./img/iconoBurger.png"


//const [menu, setmenu] = useState(false);
//return (
// <nav className="menuBurger px-5 py-3 flex justify-between" >
//   <div className="">burger rey</div>
// <ul className="flex gap-5 text-white">
//   {navegacion.map(item => {
//     return <li>{item.name}</li>
//})}
//</ul>
//</nav>
//)