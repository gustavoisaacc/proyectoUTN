import Patata from "../assets/patata.png";
import ButtonMel from "../components/ui/ButtonMel";

function NotFound() {
  return (
    <div className="image">
      <div className="h-full w-full flex justify-center items-center">
      <div className="flex flex-col justify-center ite backdrop-grayscale">
        <h1 className="text-9xl font-extrabold text-center border-spacing-1 indent-24  text-white font-letters: sixcaps ">
          404
        </h1>
        <h2 className="text-6xl font-extrabold text-center indent-24 text-secundary font-letters:Barlow Condensed ">
          NOT FOUND
        </h2>
        <p className="text-3xl italic hover:not-italic text-white text-center mt-5 decoration-dashed font-letters">
          no morfi!
        </p>
        <ButtonMel title="" type="button" className="">
          Home
        </ButtonMel>
      </div>
      <div>
      <img src={Patata} alt="Patata" className="hover:animate-spin text" />
      </div>
    </div>
    </div>
  );
}
export default NotFound;
