import { Link } from "react-router-dom";
import image2 from "../assets/react.svg";

function Card() {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 w-[200px]">
      <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
        <span className="sr-only">View</span>
      </Link>
      <img
        src={image2}
        alt="Product 1"
        width={100}
        height={100}
        className="object-cover truncate bg-no-repeat	w-full"
      />
      <div className="bg-white p-4 dark:bg-[#333333]">
        <h3 className="font-bold text-xl text-[#333333]">Gourmet Olive Oil</h3>
        <p className="text-sm text-[#333333]">Premium extra virgin olive oil</p>
        <h4 className="font-semibold text-lg md:text-xl text-[#E3891D]">
          $29.99
        </h4>
      </div>
    </div>
  );
}

export default Card;
