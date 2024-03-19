import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function MiniCart() {
  const cart = useSelector((state) => state.CartReducer);
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <>
      <Link to={"/cart"}>cart({total})</Link>
    </>
  );
}

export default MiniCart;
