import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/menuBurger/navbar"
import { ShopPage } from "./components/ShoppingCart/ShopPage"
import { CartPage } from "./components/ShoppingCart/CartPage"
import { ProductsProvider } from "./components/context/ProductsProvider"
import { CartProvider } from "./components/context/CartProvider"

export const CartApp = () => {
    return (
        <ProductsProvider>
            <CartProvider>
                <NavBar></NavBar>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<ShopPage></ShopPage>}></Route>
                        <Route path="/carrito" element={<CartPage></CartPage>}></Route>
                        <Route path="/*" element={<Navigate to='/' />}></Route>
                    </Routes>
                </div>
            </CartProvider>
        </ProductsProvider>
    )
}