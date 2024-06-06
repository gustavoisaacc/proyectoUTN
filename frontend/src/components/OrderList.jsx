import { order } from "../utils/mockup";
import Li from "./ui/Li";

function OrderList() {
  return (
    <div className="">
      <div className=" overflow-hidden rounded-lg shadow-xl  p-10 border">
        <h1 className="text-3xl font-semibold mb-5">Ordenes Recientes</h1>
        <ul className="w-full">
          <Li>
            <span>Order ID</span>
            <span>Cliente</span>
            <span>Total</span>
            <span>Estado</span>
          </Li>
          {
            // eslint-disable-next-line array-callback-return
            order.map((order) => {
              return (
                <>
                  <Li>
                    <span>{order.orderId}</span>
                    <span>{order.name}</span>
                    <span>{order.price}</span>
                    <span>{order.status}</span>
                  </Li>
                </>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default OrderList;
