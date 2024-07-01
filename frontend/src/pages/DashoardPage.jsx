import ManagerTable from "../components/ManagerTable";
import OrderList from "../components/OrderList";
import { ToastContainer } from "react-toastify";

import {
  FiUsers,
  FiShoppingCart,
  FiDollarSign,
  FiCreditCard,
} from "react-icons/fi";
import { useCar } from "../context/useAuth";
import { useEffect } from "react";
import SeeOrderModal from "../components/carrito/SeeOrderModal";

function DashoardPage() {
  const { order, getOrder } = useCar();

  useEffect(() => {
    getOrder();
  }, []);

  const promedio =
    order.reduce((accumulator, current) => accumulator + current.total, 0) /
    order.length;

  return (
    <>
      <div className="w-[95%] m-auto">
        <header className="flex flex-col lg:flex-row gap-5 my-10 ">
          <ManagerTable
            name="Total Orders"
            total={order.length}
            className="bg-primary "
            icon={<FiShoppingCart />}
          />
          <ManagerTable
            name="Ingresos totales"
            total={`$${order.reduce(
              (accumulator, current) => accumulator + current.total,
              0
            )}`}
            className="bg-primaryLigth "
            icon={<FiDollarSign />}
          />
          <ManagerTable
            name="Clientes totales"
            total={order.length}
            className="bg-secundaryDark"
            icon={<FiUsers />}
          />
          <ManagerTable
            name="Promedio totales"
            total={promedio}
            className="bg-secundary"
            icon={<FiCreditCard />}
          />
        </header>
        <main>
          <OrderList order={order} />
        </main>
      </div>
      <SeeOrderModal />
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default DashoardPage;
