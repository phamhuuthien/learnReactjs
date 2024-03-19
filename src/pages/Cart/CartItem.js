import { useDispatch } from "react-redux";
import { DeleteCart, UpdateQuantity } from "../../actions/cart";

function CartItem(props) {
  const { item } = props;

  const dispatch = useDispatch();

  const handleDown = () => {
    if (item.quantity > 1) {
      dispatch(UpdateQuantity(item.id, -1));
    }
  };
  const handleUp = () => {
    dispatch(UpdateQuantity(item.id));
  };

  const handleDelete = () => {
    dispatch(DeleteCart(item.id));
  };

  return (
    <>
      <div className="cart__item">
        <div className="cart__image">
          <img src={item.info.thumbnail} alt={item.info.title} />
        </div>
        <div className="cart__content">
          <h4 className="cart__title">{item.info.title}</h4>
          <div className="cart__price--new">
            {(
              item.info.price *
              (1 - item.info.discountPercentage / 100)
            ).toFixed(0)}
            $
          </div>
          <div className="cart__price--old"> {item.info.price}</div>
        </div>
        <div className="cart__quantity">
          <button onClick={handleDown}>-</button>
          <input value={item.quantity} />
          <button onClick={handleUp}>+</button>
        </div>
        <button onClick={handleDelete}>xóa</button>
      </div>
    </>
  );
}

export default CartItem;
