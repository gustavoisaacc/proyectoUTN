import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

function DashboarLayout() {
  return (
    <div className="w-screen h-screen grid grid-cols-layout grid-rows-[auto,1fr,auto] ">
      <header className="bg-primary row-span-1">
        <Navbar />
      </header>
      <main className="">
        <Outlet />
      </main>
      <div className="bg-primary row-span-1">
        <Footer />
      </div>
    </div>
  );
}

export default DashboarLayout;
