import Card from "./Card";

function CardList({ items }) {
  const { title, description, price, image } = items;
  console.log(image);

  return (
    <div className="grid place-content-center m-auto">
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
