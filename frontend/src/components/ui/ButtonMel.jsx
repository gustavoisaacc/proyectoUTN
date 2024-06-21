import propTypes from "prop-types";

const ButtonMel = ({ title, disabled }) => {
  return (
    <button
      disabled={disabled}
      className="m-2 px-6 h-10 animate-bounce aling-center bg-secundary rounded-3xl  text-white shadow-slade-800 hover:shadow-2xl shadow-inner-xl transition-all font-letters hover:brightness-125 active:shadow-none active:brightness-110 disabled:bg-[#1d1b2096] disabled:shadow-none disabled:text-[#1d1b205f]"
    >
      {title}
    </button>
  );
};

export default ButtonMel;

ButtonMel.propTypes = {
  title: propTypes.string,
  disabled: propTypes.bool,
};

ButtonMel.defaultProps = {
  title: "Action",
  disabled: false,
};
