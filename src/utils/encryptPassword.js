import bcrypt from "bcrypt";

export const hash = async (password) => {
  const salt = await bcrypt.salt(password);
  return await bcrypt.hash(password, salt);
};

export const compare = async (password, passwordHash) => {
  return await bcrypt.compare(password, passwordHash);
};
