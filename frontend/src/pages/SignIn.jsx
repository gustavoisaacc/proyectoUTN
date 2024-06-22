import burger from "../assets/hamburmundo.jpg";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navegate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, error: loginError } = useAuth();

  const onSubmit = handleSubmit(async (data) => {
    const user = await signin(data);
    if (user) navegate("/dashboard");
  });

  return (
    <div className="h-full flex bg-black shadow-md border  shadow-neutral-100 ">
      <div className="w-full grid place-content-center">
        {loginError && (
          <p className="text-white bg-red-400 p-2 rounded-lg">
            {loginError.msg}
          </p>
        )}
        <form
          className="p-10 bg-primary space-y-4 flex flex-col mx-auto mt-10 border-2 border-black text-black shadow-lg"
          onSubmit={onSubmit}
        >
          <h1 className="px-8 text-center text-xl text-secundary text-bold">
            Iniciar Sesion
          </h1>

          <input
            type="text"
            placeholder="Email"
            className="inputClass"
            {...register("name", { required: true })}
          />
          {errors.name && <p className="text-red-500">Name is required</p>}
          <input
            type="password"
            placeholder="Contraseña"
            className="inputClass"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
          <button className="h-[50px] w-[150px] bg-secundary text-white font-bold rounded hover:bg-secundary hover:text-white">
            Aceptar
          </button>
        </form>
      </div>
      <div className="h-full hidden md:block">
        <img src={burger} alt="" />
      </div>
    </div>
  );
}

export default SignIn;
