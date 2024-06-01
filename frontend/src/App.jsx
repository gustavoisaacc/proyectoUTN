import Botton from "./components/ui/Botton";

function App() {
  return (
    <div className="bg-black min-h-screen grid place-content-center">
      <h1 className="text-white">Hello, world!</h1>

      <Botton name="bienvenido" className="bg-blue-500 text-white" />
      <Botton name="enviado" className="text-blue-500" />
    </div>
  );
}

export default App;
