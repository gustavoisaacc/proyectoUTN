//import React from "react";

function Cardprod(props) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${props.className}`}>
      <img
        src="https://i0.wp.com/www.gastongbg.com/wp-content/uploads/2022/04/Compartido-desde-Lightroom-mobile-e1648940739620.jpg?fit=1920%2C1082&ssl=1"
        alt="Producto"
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <h1 className="text-xl font-bold mt-2">{props.name}</h1>
      <p className="text-blue-700">{props.description}</p>
      <h2 className="text-orange-650 font-bold mt-2">{props.precio}</h2>
    </div>
  );
}

export default Cardprod;

