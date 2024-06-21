import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <Link
      to={props.path}
      className={`border w-full border-primary  px-5 py-2 rounded-md text-md md:text-sm font-semibold uppercase  ${props.className}`}
    >
      {props.name}
    </Link>
  );
}
