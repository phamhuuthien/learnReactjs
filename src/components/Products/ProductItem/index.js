import { AddToCart, UpdateQuantity } from "../../../actions/cart";
import { useDispatch, useSelector } from "react-redux";
function ProductItem(props) {
  const { item } = props;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.CartReducer);
  const handleAddToCart = () => {
    if (cart.some((itemCart) => itemCart.id === item.id)) {
      dispatch(UpdateQuantity(item.id));
    } else {
      dispatch(AddToCart(item.id, item));
    }
  };

  return (
    <>
      <div className="product__item">
        <img className="product__image" src={item.thumbnail} alt={item.title} />
        <h3 className="product__title">{item.title}</h3>
        <div className="product__price--new">
          {(item.price * (1 - item.discountPercentage / 100)).toFixed(0)}$
        </div>
        <div className="product__price--odd">{item.price}$</div>
        <div className="product__percent">{item.discountPercentage}%</div>
        <button onClick={handleAddToCart}>add cart</button>
      </div>
    </>
  );
}

export default ProductItem;
