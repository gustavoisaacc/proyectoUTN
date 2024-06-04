import Button from "../components/ui/ButtonLucia";
import CardHeders from "../components/cardHeders";
import { Link } from "react-router-dom";
import Card from "../components/Card";

function HomePage() {
  return (
    <div>
      <div className="bg-secundary w-screen h-full p-10">
        <header className="flex flex-col items-center gap-5 lg:flex-row justify-between">
          <CardHeders
            className="text-white w-[300px] md:w-[500px] m-0"
            title="Descubre el Arte de la Gastronomía"
            description="Explora nuestros productos premium y aprende sobre el fascinante mundo de la gastronomía"
          >
            <div className="mt-5 flex justify-between gap-5 ">
              <Button name="Pedidos" className="bg-primary text-white" />
              <Button name="ver mas" className=" text-slate-400 bg-white" />
            </div>
          </CardHeders>
          <section>
            <div className="border h-[200px] w-[600px] bg-slate-400"></div>
          </section>
        </header>
      </div>
      <main className="my-10">
        <section>
          <CardHeders
            className="text-black"
            title="Descubre el Arte de la Gastronomía"
            description="Explora nuestros productos premium y aprende sobre el fascinante mundo de la gastronomía"
          />
          <div className="flex gap-10 mt-10">
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
