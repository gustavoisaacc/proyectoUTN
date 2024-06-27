import { Link } from "react-router-dom";

function Card({ image }) {
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
      
    </div>
  );
}

export default Card;
