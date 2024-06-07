import P from "./ui/p.jsx";

const CardHeders = ({ children, title, description, className }) => {
  return (
    <div className={` flex  m-auto place-content-center ${className}`}>
      <div className="mt-10">
        <h1 className="text-3xl font-semibold mb-5 ">{title}</h1>
        <P name={`${description}`} />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CardHeders;
