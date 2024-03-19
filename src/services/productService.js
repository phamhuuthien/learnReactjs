import { del, get, post, patch } from "../utils/request";

export const getProductList = async () => {
  const result = await get("products");
  return result;
};

export const createProduct = async (options) => {
  const result = await post("products", options);
  return result;
};

export const deleteProduct = async (item) => {
  const result = await del("products", item);
  return result;
};

export const editProduct = async (options) => {
  const result = await patch("products", options);
  return result;
};
