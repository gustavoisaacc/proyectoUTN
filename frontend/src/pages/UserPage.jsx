import MenuNewItem from "../components/products/MenuNewItem";
import AddRoleModal from "../components/usuer/AddRoleModal";
import AddUpdateRoleModal from "../components/usuer/AddUpdateRoleModal";
import AddUpdateUserModal from "../components/usuer/AddUpdateUseModal";
import AddUserModal from "../components/usuer/AddUserModal";
import ListUser from "../components/usuer/ListUser";
import ListRole from "../components/usuer/ListaRole";

function UserPage() {
  return (
    <div className="container justify-between gap-8 w-[95%] mx-auto my-10">
      <MenuNewItem name="User" item="Rol" path="newRole" path1="newUser" />
      <div className="w-full md:flex gap-5">
        <ListUser />
        <ListRole />
      </div>
      <AddUserModal />
      <AddRoleModal />
      <AddUpdateUserModal/>
      <AddUpdateRoleModal/>
    </div>
  );
}

export default UserPage;
