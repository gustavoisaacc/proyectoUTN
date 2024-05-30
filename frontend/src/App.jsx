import Boton from "./components/boton";
import P from "./components/ui/p";

function App() {
  return (
    <div className="bg-black min-h-screen grid place-content-center">
      <h1 className="text-white">Hello, world!</h1>
      <div>
        <Boton name="abrir" />
      </div>
      <P name="hamburguesa con descuento"/>
    </div>
  );
}

export default App;
