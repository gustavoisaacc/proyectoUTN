import ManagerTable from "../components/ManagerTable";
import OrderList from "../components/OrderList";

import {
  FiUsers,
  FiShoppingCart,
  FiDollarSign,
  FiCreditCard,
} from "react-icons/fi";

function DashoardPage() {
  return (
    <div className="w-[95%] m-auto">
      <header className="flex gap-5 my-10">
        <ManagerTable
          name="Total Orders"
          total="$200"
          className="bg-primary "
          icon={<FiShoppingCart />}
        />
        <ManagerTable
          name="Ingresos totales"
          total="$200"
          className="bg-primaryLigth "
          icon={<FiDollarSign />}
        />
        <ManagerTable
          name="Clientes totales"
          total="$200"
          className="bg-secundaryDark"
          icon={<FiUsers />}
        />
        <ManagerTable
          name="Promedio totales"
          total="$200"
          className="bg-secundary"
          icon={<FiCreditCard />}
        />
      </header>
      <main>
        <OrderList />
      </main>
    </div>
  );
}

export default DashoardPage;
