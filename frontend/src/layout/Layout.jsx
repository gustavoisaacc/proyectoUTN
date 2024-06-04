import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import CardHeders from "../components/cardHeders";


function Layout() {
  return (
    <div className="w-screen h-screen grid grid-cols-layout grid-rows-[auto,1fr,auto] ">
      <header className="bg-primary row-span-1">
        <CardHeders/>
      </header>
      <main className="">
        <Outlet />
      </main>
      <div className="bg-primary row-span-1">
        <Footer/>
      </div>
    </div>
  );
}

export default Layout;
