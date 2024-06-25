import LisrCarousel from "./LisrCarousel";

const images = [ "asd", "sandwich", "zxc"];

function Carousel() {
  return (
    <div >
      <div className="w-full ">
        <LisrCarousel autoSlide={true}>
          {images.map((item) => {
            return (
              <>
                <img
                  src={`public/images/${item}.jpg`}
                  alt={`${item}`}
                  className="object-contain h-full"
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
