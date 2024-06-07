import Button from "../components/ui/ButtonLucia";
import CardHeders from "../components/cardHeders";

import { comment, products } from "../utils/mockup";
import CardList from "../components/CardList";
import Comment from "../components/Comment";

function HomePage() {
  return (
    <div>
      <div className="bg-secundary w-full h-full">
        <header className="flex flex-col items-center  lg:flex-row justify-between gap-5 p-10">
          <CardHeders
            className="text-center text-white w-full lg:justify-start lg:text-left"
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
            className="text-center text-black text-2xl "
            title="Descubre el Arte de la Gastronomía"
            description="Explora nuestros productos premium y aprende sobre el fascinante mundo de la gastronomía"
          />
          <div className="grid grid-cols-12 grid-rows-layout gap-5 mt-10 px-10">
            {products.map((items) => {
              return <CardList key={items.id} items={items} />;
            })}
          </div>
        </section>
      </main>
      <section className=" bg-slate-300 w-full h-full py-10">
        <CardHeders
          className="text-center text-black text-2xl "
          title="RECOMENDACIONES"
          description="los Clientes nos dicen"
        />
        <div className="flex gap-5 mt-10 px-10">
          {comment.map((items) => {
            return <Comment key={items.id} items={items} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
