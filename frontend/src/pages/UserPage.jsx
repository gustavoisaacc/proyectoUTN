import { ToastContainer } from "react-toastify";
import MenuNewItem from "../components/products/MenuNewItem";
import AddRoleModal from "../components/usuer/AddRoleModal";
import AddUpdateRoleModal from "../components/usuer/AddUpdateRoleModal";
import AddUpdateUserModal from "../components/usuer/AddUpdateUseModal";
import AddUserModal from "../components/usuer/AddUserModal";
import ListUser from "../components/usuer/ListUser";
import ListRole from "../components/usuer/ListaRole";
import { useRole, useUsers } from "../context/useAuth";
import { useEffect } from "react";

function UserPage() {
  const { users, getUsers } = useUsers();
  const { role, getRole } = useRole();

  useEffect(() => {
    getUsers();
    getRole();
  }, []);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container justify-between gap-8 w-[95%] mx-auto my-10">
        <MenuNewItem name="User" item="Rol" path="newRole" path1="newUser" />
        <div className="w-full md:flex gap-5">
          <ListUser users={users} />
          <ListRole role={role} />
        </div>
        <AddUserModal />
        <AddRoleModal />
        <AddUpdateUserModal />
        <AddUpdateRoleModal />
      </div>
    </>
  );
}

export default UserPage;
