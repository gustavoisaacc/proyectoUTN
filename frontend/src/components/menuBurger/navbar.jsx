import { useState } from "react";
import "../menuBurger/menuBurger.css";
import { navegacion } from "../../utils/navegacion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nadvar text-white p-5 w-[95%] m-auto">
      <div className="nav-logo">coode</div>
      <div className={`nav-item ${isOpen && "open"} flex gap-5 `}>
        {navegacion.map((item) => {
          return (
            <Link to={item.path} key={item.id}>
              {item.name}
            </Link>
          );
        })}
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen((state) => !state)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;

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
