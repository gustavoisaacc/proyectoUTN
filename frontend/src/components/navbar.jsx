import "../utils/navegacion"
import { navegacion } from "../utils/navegacion"
const Navbar = () => {
    return (
        <nav className="px-5 py-3 flex justify-between">
            <div className="">burger rey</div>
            <ul className="flex gap-5 text-white">
               { navegacion.map(item => { 
                return <li>{item.name}</li>
                })}
            </ul>
        </nav>
    )
}

export default Navbar