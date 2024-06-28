const CounterButton = ({ count, setCount }) => {
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="space-x-4">
        <button
          className="border-2 border-green-500 bg-green-500 text-white px-6 py-1 rounded-2xl"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          disabled={count === 1}
          className={`border-2 border-red-500 bg-red-500 text-white px-6 py-1 rounded-2xl
            ${count === 1 && "opacity-50 cursor-not-allowed"}`}
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
      <div className="text-xl">Cantidad: {count}</div>
    </div>
  );
};

export default CounterButton;
