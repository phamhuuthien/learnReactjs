import { useSelector } from "react-redux";
import "./Cart.scss";
import CartItem from "../Cart/CartItem";
function CartList() {
  const cart = useSelector((state) => state.CartReducer);

  return (
    <>
      <div className="cart">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default CartList;
