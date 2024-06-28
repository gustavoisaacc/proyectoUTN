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
          {...register("name", {
            required: "El nombre de la tarea es obligatorio",
          })}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </div>

      <div className="flex flex-col gap-5 mt-5">
        <select
          id="category"
          className="w-full p-3  border-gray-300 border mb-5"
          {...register("category", {
            required: "La categoria de la tarea es obligatorio",
          })}
        >
          <option value="">Seleccione metodo de pago</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <ErrorMessage>{errors.category.message}</ErrorMessage>
        )}
      </div>
    </>
  );
}
