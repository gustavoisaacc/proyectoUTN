import Button from "../components/ui/ButtonLucia";
import CardHeders from "../components/cardHeders";

import { products } from "../utils/mockup";
import CardList from "../components/CardList";

function HomePage() {
  return (
    <div>
      <div className="bg-secundary w-full h-full">
        <header className="flex flex-col items-center  lg:flex-row justify-between p-10">
          <CardHeders
            className="text-white w-full md:justify-start"
            title="Descubre el Arte de la Gastronomía"
            description="Explora nuestros productos premium y aprende sobre el fascinante mundo de la gastronomía"
          >
            <div className="mt-5 flex justify-between gap-5 ">
              <Button name="Pedidos" className="bg-primary text-white" />
              <Button name="ver mas" className=" text-slate-400 bg-white" />
            </div>
          </CardHeders>
          <section>
            <div className=" border h-[200px] w-[650px] bg-slate-400 "></div>
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
          <div className="flex gap-5 mt-10 ">
            {products.map((items) => {
              return <CardList key={items.id} items={items} />;
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
