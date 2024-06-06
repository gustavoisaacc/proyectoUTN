import { Link } from "react-router-dom";

function Card({ title, description, price, image }) {
  console.log(image);
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 ">
      <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
        <span className="sr-only">View</span>
      </Link>
      <img
        src={`${image}`}
        alt="Product 1"
        width={100}
        height={100}
        className="object-cover truncate bg-no-repeat	w-full"
      />
      <div className="bg-white p-4 dark:bg-[#333333]">
        <div className="flex justify-between">
          <h3 className="font-bold text-xl text-[#333333]">{title}</h3>
          <h4 className="font-semibold text-lg md:text-xl text-[#E3891D]">
            ${price}
          </h4>
        </div>
        <p className="text-sm text-[#333333]">{description}</p>
      </div>
    </div>
  );
}

export default Card;
