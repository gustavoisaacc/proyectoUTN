import Li from "../ui/Li";
import BtnRol from "../ui/btnRol";

function ListRole({ role }) {
  return (
    <ul className="w-full md:w-[40%] border rounded-md">
      <h1 className=" font-semibold border-b-2 text-center p-5 ">Rol</h1>
      <Li className="grid-cols-2 px-5">
        <span>Nombre</span>
        <span>Acciones</span>
      </Li>
      {role &&
        role.map((item) => {
          return (
            <Li className="grid-cols-2 px-5" key={item._id}>
              <span>{item.name}</span>
              <button>
                <BtnRol id={item._id} />
              </button>
            </Li>
          );
        })}
    </ul>
  );
}
export default ListRole;
