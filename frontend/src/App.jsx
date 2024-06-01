import Button from "./components/ui/Button";

function App() {
  return (
    <div className="bg-black min-h-screen grid place-content-center">
      <h1 className="text-white">Hello, world!</h1>
      <Button nombre= "Bienvenido" className = "bg-blue-500 text-white"/>;
      <Button nombre= "Enviado" className = "bg-blue-500 text-white"/>;
    </div>
    

  );
}

export default App;
