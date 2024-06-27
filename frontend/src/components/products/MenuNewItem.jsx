import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";

import { useNavigate } from "react-router-dom";
function MenuNewItem({ name, item, path, path1 }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between mb-10">
      <Menu>
        <MenuButton className="bg-secundary text-white rounded-lg px-5 py-2">
          <span className="text-white flex items-end gap-1">
            {name}
            <FiChevronDown />
          </span>
        </MenuButton>
        <MenuItems anchor="bottom" className=" px-1">
          <MenuItem className="block data-[focus]:bg-blue-100 p-2">
            <button onClick={() => navigate(`?${path1}=true`)}>
              Nuevo {name}
            </button>
          </MenuItem>
          <MenuItem className="block data-[focus]:bg-blue-100 p-2">
            <button onClick={() => navigate(`?${path}=true`)}>
              Nuevo {item}
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}

export default MenuNewItem;
