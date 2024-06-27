import { useRole } from "../../context/useAuth";
import { ErrorMessage } from "../ui/ErrorMessage";

function UserUpdateForm({ register, errors }) {
  const { role } = useRole();

  return (
    <>
      <div className="flex flex-col gap-5">
        <label className="font-normal text-2xl" htmlFor="name">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          placeholder="Nombre de usuario"
          className="w-full p-3  border-gray-300 border"
          {...register("name", {
            required: "El nombre de la tarea es obligatorio",
          })}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </div>

      <div className="flex flex-col gap-5 mt-5">
        <select
          id="role"
          className="w-full p-3  border-gray-300 border mb-5"
          {...register("role", {
            required: "La role de la tarea es obligatorio",
          })}
        >
          <option value="">Eleguir un role</option>
          {role.map((item) => (
            <option key={item._id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        {errors.role && <ErrorMessage>{errors.role.message}</ErrorMessage>}
      </div>
    </>
  );
}

export default UserUpdateForm;
