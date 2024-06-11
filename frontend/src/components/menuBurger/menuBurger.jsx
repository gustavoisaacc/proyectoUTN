import { useState } from "react"


const MenuBurger = () => {
    const [menu, setmenu] = useState(false)
    return (
        <button onClick={() => {
            setmenu(true)
        }}></button>
    )
}

export default MenuBurger