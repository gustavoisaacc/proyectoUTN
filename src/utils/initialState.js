import { Categories } from "../models/categoy.model.js";
import { Roles } from "../models/role.model.js";

export const createRoles = async () => {
  try {
    const roles = await Roles.estimatedDocumentCount();
    if (roles > 0) return;
    const values = await Promise.allSettled([
      new Roles({ name: "superadmin" }).save(),
      new Roles({ name: "admin" }).save(),
      new Roles({ name: "customer" }).save(),
    ]);
    console.log(values);
  } catch (error) {
    console.log(error);
  }
};

export const createCategories = async () => {
  try {
    const category = await Categories.estimatedDocumentCount();
    if (category > 0) return;
    const values = await Promise.allSettled([
      new Categories({ name: "sandwich" }).save(),
      new Categories({ name: "burgers" }).save(),
      new Categories({ name: "al plato" }).save(),
    ]);
    console.log(values);
  } catch (error) {
    console.log(error);
  }
};
