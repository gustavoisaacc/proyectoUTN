import CardList from "../components/CardList";
import { products } from "../utils/mockup";

function signinPage() {
  return (
    <div>
      <section>
        <div className="">
          {products.map((items) => {
            return <CardList key={items.id} items={items} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default signinPage;
