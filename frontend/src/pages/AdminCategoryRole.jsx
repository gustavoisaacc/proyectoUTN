import CreateRolCategory from "../components/createRol";

function AdminCategoryRole() {
  return (
    <div className="container flex justify-between gap-8 w-[95%] mx-auto my-10">
      <div className="roles border-2 border-gray-700 w-full "><CreateRolCategory name="Roles"/></div>
      <div className="category roles border-2 border-gray-700 w-full"><CreateRolCategory name="Categoria"/></div>
    </div>
  );
}

export default AdminCategoryRole;
