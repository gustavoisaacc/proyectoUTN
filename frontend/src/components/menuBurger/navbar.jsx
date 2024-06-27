import { useState } from "react";
import "../menuBurger/menuBurger.css";
import { PROTECTEDROUTES, navegacion } from "../../utils/navegacion";
import { Link } from "react-router-dom";
import { useAuth, useProduct } from "../../context/useAuth";
import ShoppingCart from "../carrito/shopingCart";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuth, signout } = useAuth();

  return (
    
    <div className="nadvar text-white p-5 w-[95%] m-auto">
      <div className="nav-logo">coode</div>
      <div className={`nav-item ${isOpen && "open"} flex gap-5 `}>
      <ShoppingCart/>
      
      
        {!isAuth ? (
          navegacion.map((item) => {
            return (
              <Link to={item.path} key={item.id}>
                {item.name}
              </Link>
            );
          })
        ) : (
          <div className={`nav-item ${isOpen && "open"} flex gap-5 `}>
            {PROTECTEDROUTES.map((item) => {
              return (
                <div key={item.id}>
                  <Link to={item.path}>{item.name}</Link>
                </div>
              );
            })}
            <button onClick={() => signout()}>logout</button>
          </div>
        )}
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
