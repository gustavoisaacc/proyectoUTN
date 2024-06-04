import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="w-screen h-screen grid grid-cols-layout grid-rows-[auto,1fr,auto] ">
      <header className="bg-primary row-span-1">
        <h1 className="text-center text-4xl font-bold text-gray-100">
          Hola Mundo
        </h1>
      </header>
      <main className="">
        <Outlet />
      </main>
      <footer className="bg-primary row-span-1">
        <h1 className="text-center text-4xl font-bold text-gray-100">
          Hola Mundo
        </h1>
      </footer>
    </div>
  );
}

export default Layout;
