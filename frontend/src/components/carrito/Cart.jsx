import '../carrito/Cart.css'

import { useId } from 'react'
// import { CartIcon, ClearCartIcon } from './Icons.jsx'


 function CartItem ({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

// export function Cart () {
//   const cartCheckboxId = useId()
//   const { cart, clearCart, addToCart } = useCart()

//   return (
//     <>
//       <label className='cart-button' htmlFor={cartCheckboxId}>
//         {/* <CartIcon /> */}
//       </label>
//       <input id={cartCheckboxId} type='checkbox' hidden />

//       <aside className='cart'>
//         <ul>
//           {cart.map(product =>{return (
//             <h1>hola</h1>
//           )})}
//         </ul>

//         <button onClick={clearCart}>
//           {/* <ClearCartIcon /> */}
//         </button>
//       </aside>
//     </>
//   )
// }