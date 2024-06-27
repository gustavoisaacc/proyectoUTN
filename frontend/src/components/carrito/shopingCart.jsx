// import React, { useState } from 'react';
// import { FaShoppingCart } from 'react-icons/fa';

// const ShoppingCart = (car) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const cartItems = [
//     { id: 1, name: 'Artículo 1', price: 10.99, quantity: 1 },
//     { id: 2, name: 'Artículo 2', price: 15.99, quantity: 2 },
//     // Puedes agregar más elementos aquí
//   ];

//   return (
//     <div className="relative">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="relative flex items-center p-2"
//       >
//         <FaShoppingCart className="text-white text-2xl" />
//         {cartItems.length > 0 && (
//           <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
//             {cartItems.length}
//           </span>
//         )}
//       </button>
//       {isOpen && (
//         <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg z-20">
//           {cartItems.length > 0 ? (
//             <div className="p-4">
//               {cartItems.map((item) => (
//                 <div key={item.id} className="flex items-center justify-between mb-4">
//                   <div>
//                     <p className="text-gray-700">{item.name}</p>
//                     <p className="text-gray-500 text-sm">Cantidad: {item.quantity}</p>
//                   </div>
//                   <p className="text-gray-700">
//                     ${(item.price * item.quantity).toFixed(2)}
//                   </p>
//                 </div>
//               ))}
//               <div className="mt-4">
//                 <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
//                   VER
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <div className="p-4">
//               <p className="text-gray-700">Tu carrito está vacío.</p>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShoppingCart;
