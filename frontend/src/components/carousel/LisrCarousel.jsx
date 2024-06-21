import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function LisrCarousel({
  children,
  autoSlide = false,
  autoSlideInterval = 5000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative w-full md:w-[500px] h-[250px]">
      <div
        className="flex transition-transform ease-out duration-200 "
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {children}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          className=" bg-slate-200 text-gray-700 rounded-full shadow p-1 hover:bg-white "
          onClick={prev}
        >
          <FaChevronLeft size={10} />
        </button>
        <button
          className=" bg-slate-200 text-gray-700 rounded-full shadow p-1 hover:bg-white "
          onClick={next}
        >
          <FaChevronRight size={10} />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {children.map((_, i) => (
            <>
              <div
                className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LisrCarousel;
