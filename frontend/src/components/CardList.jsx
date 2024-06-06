import Card from "./Card";

function CardList({ items }) {
  const { title, description, price, image } = items;
  console.log(image);

  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 gap-5">
      <Card
        title={title}
        description={description}
        price={price}
        image={image}
      />
    </div>
  );
}

export default CardList;
