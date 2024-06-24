const CreateRolCategory = ({ register }) => {
  return (
    <>
      <div className=" gap-5 my-5">
        <label htmlFor="name">Nombre</label>
        <input
          className="w-full border rounded-lg border-secundary  p-2 "
          name="name"
          type="text"
          placeholder="Nombre"
          {...register("name", {
            required: "El nombre de la tarea es obligatorio",
          })}
        />
      </div>
    </>
  );
};

export default CreateRolCategory;
