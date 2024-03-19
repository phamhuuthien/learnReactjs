import { useSelector } from "react-redux";
import CartList from "./CartList";
import { useDispatch } from "react-redux";
import { DeleteAll } from "../../actions/cart";
function Cart() {
  const cart = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();
  const total = cart.reduce((sum, item) => {
    const newPrice = item.info.price * (1 - item.info.discountPercentage / 100);
    return sum + newPrice * item.quantity;
  }, 0);

  const handleDeleteAll = () => {
    dispatch(DeleteAll());
  };

  return (
    <>
      <div>
        <h2>giỏ hàng</h2>
        <button onClick={handleDeleteAll}>xóa tất cả</button>
      </div>
      <div>
        {cart.length > 0 ? (
          <>
            <CartList />
            <h3>tổng tiền :</h3>
            <span>{total.toFixed(0)}$</span>
          </>
        ) : (
          <>giỏ hàng trống</>
        )}
      </div>
    </>
  );
}
export default Cart;
