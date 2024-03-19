const CartReducer = (state = [], action) => {
  let newState = [...state];
  switch (action.type) {
    case "Add_To_Cart":
      return [...state, { id: action.id, quantity: 1, info: action.info }];
    case "Update_Quantity":
      const cartItemUpdate = newState.find((cart) => cart.id === action.id);
      cartItemUpdate.quantity = cartItemUpdate.quantity + action.quantity;
      return newState;
    case "Delete_Cart":
      newState = newState.filter((item) => item.id !== action.id);
      return newState;
    case "Delete_All":
      return [];
    default:
      return state;
  }
};

export default CartReducer;
