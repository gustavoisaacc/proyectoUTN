import { ErrorMessage } from "../ui/ErrorMessage";

export default function PagoForm({ register, errors }) {
  const categories = ["Efectivo", "Debito", "Credito"];

  return (
    <>
      <div className="flex flex-col gap-5">
        <label className="font-normal text-2xl" htmlFor="name">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          placeholder="Nombre de la tarea"
          className="w-full p-3  border-gray-300 border"
          {...register("user", {
            required: "El nombre es obligatorio",
          })}
        />
        {errors.user && <ErrorMessage>{errors.user.message}</ErrorMessage>}
      </div>

      <div className="flex flex-col gap-5 mt-5">
        <select
          id="category"
          className="w-full p-3  border-gray-300 border mb-5"
          {...register("metodo", {
            required: "La categoria es obligatorio",
          })}
        >
          <option value="">Seleccione metodo de pago</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.metodo && <ErrorMessage>{errors.metodo.message}</ErrorMessage>}
      </div>
    </>
  );
}
