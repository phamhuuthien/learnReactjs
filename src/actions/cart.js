const AddToCart = (id, info) => {
  return {
    type: "Add_To_Cart",
    id: id,
    info: info,
  };
};

const UpdateQuantity = (id, quantity = 1) => {
  return {
    type: "Update_Quantity",
    id: id,
    quantity: quantity,
  };
};

const DeleteCart = (id) => {
  return {
    type: "Delete_Cart",
    id: id,
  };
};
const DeleteAll = () => {
  return {
    type: "Delete_All",
  };
};

export { AddToCart, UpdateQuantity, DeleteCart, DeleteAll };
