import Li from "./ui/Li";
import { FaRegEye } from "react-icons/fa";

function OrderList({ order }) {
  return (
    <div className="">
      <div className=" overflow-hidden rounded-lg shadow-xl  p-10 border">
        <h1 className="text-3xl font-semibold mb-5">Ordenes Recientes</h1>
        <ul className="w-full ">
          <Li className="grid-cols-6 lg:gird-cols-4">
            <span></span>
            <span>Order ID</span>
            <span>Cliente</span>
            <span>Total</span>
            <span>Metodo de pago</span>
            <span>Estado</span>
          </Li>
          {
            // eslint-disable-next-line array-callback-return
            order.map((order, index) => {
              return (
                <div key={order.orderId}>
                  <Li
                    className={`grid-cols-6 lg:gird-cols-4 p-2 ${
                      index % 2 === 0 ? "bg-gray-200" : "bg-white"
                    }`}
                  >
                    <button className="mx-4">
                      <FaRegEye size={20} />
                    </button>
                    <span>{order.orderNumber}</span>
                    <span>{order.user}</span>
                    <span>${order.total}</span>
                    <span>{order.metodo}</span>
                    <span>{order.status}</span>
                  </Li>
                </div>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default OrderList;
