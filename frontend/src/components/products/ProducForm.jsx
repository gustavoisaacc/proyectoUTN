import { useCategory } from "../../context/useAuth";
import { ErrorMessage } from "../ui/ErrorMessage";

export default function ProductForm({ register, errors }) {
  const { categories } = useCategory();

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
        <label className="font-normal text-2xl" htmlFor="name">
          Precio
        </label>
        <input
          id="price"
          type="number"
          placeholder="Nombre de la tarea"
          className="w-full p-3  border-gray-300 border"
          {...register("price", {
            required: "El nombre de la tarea es obligatorio",
          })}
        />
        {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
      </div>

      <div className="flex flex-col gap-5 mt-5">
        <select
          id="category"
          className="w-full p-3  border-gray-300 border mb-5"
          {...register("category", {
            required: "La categoria de la tarea es obligatorio",
          })}
        >
          <option value="">Seleccione una categoria</option>
          {categories.map((category) => (
            <option key={category._id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.category && (
          <ErrorMessage>{errors.category.message}</ErrorMessage>
        )}
      </div>

      <div className="flex flex-col gap-5 mt-5">
        <label className="font-normal text-2xl" htmlFor="description">
          Descripción del producto
        </label>
        <textarea
          id="description"
          placeholder="Descripción de la tarea"
          className="w-full p-3  border-gray-300 border"
          {...register("description", {
            required: "La descripción de la tarea es obligatoria",
          })}
        />
        {errors.description && (
          <ErrorMessage>{errors.description.message}</ErrorMessage>
        )}
      </div>
    </>
  );
}
