import background from "../assets/milanesa.jpg"; 
import MapView from "../components/MapView";
import VisionMissionObjectives from "../components/VisionMissionObjectives";


function App() {
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center rounded-md  "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md opacity-70 border-separate ">
        <h1 className="text-3xl font-bold mb-4">NOSOTROS</h1>
        <p className="text-gray-600">
          Somos un equipo apasionado por el arte culinario en la provincia de Tucumán,buscando dar lo mejor a los paladares más exigentes, siendo tradicionalistas en nuestra cocina e innovadores a la hora de mejorar la atención y la velocidad en la preparación de nuestros productos.
        </p>
        <VisionMissionObjectives/>
        

      </div>
      <div>
      <MapView />

      </div>
      
      
    </div>


  );
}

export default App;
