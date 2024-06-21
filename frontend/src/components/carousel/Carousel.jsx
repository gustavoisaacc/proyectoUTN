import LisrCarousel from "./LisrCarousel";

const images = ["burger", "burger-2", "sandwich"];

function Carousel() {
  return (
    <div>
      <div className="w-full">
        <LisrCarousel autoSlide={true}>
          {images.map((item) => {
            return (
              <>
                <img
                  src={`public/images/${item}.jpg`}
                  alt="Product 1"
                  className="object-cover bg-no-repeat	w-full"
                />
              </>
            );
          })}
        </LisrCarousel>
      </div>
    </div>
  );
}

export default Carousel;
