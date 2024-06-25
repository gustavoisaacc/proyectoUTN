import { useEffect } from "react";
import { useUsers } from "../../context/useAuth";
import Li from "../ui/Li";
import BtnUser from "../ui/btnUser";

function ListUser() {
  const { users, getUsers } = useUsers();
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <ul className="w-full border rounded-md">
      <h1 className=" font-semibold border-b-2 text-center p-5 ">Usuarios</h1>
      <Li className="grid-cols-3 px-5">
        <span>Nombre</span>
        <span>Rol</span>
        <span>Acciones</span>
      </Li>
      {!users ? (
        <h1>No hay Usuarios</h1>
      ) : (
        users.map((item) => {
          return (
            <Li className="grid-cols-3 px-5" key={item._id}>
              <span>{item.name}</span>
              <span>
                {Array.isArray(item.role)
                  ? item.role.map((item) => item.name)
                  : "no hay role"}
              </span>
              <button><BtnUser id={item._id}/></button>
            </Li>
          );
        })
      )}
    </ul>
  );
}

export default ListUser;
