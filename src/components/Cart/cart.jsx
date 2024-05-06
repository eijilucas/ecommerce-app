import { useContext } from "react";
import "./cart.scss";
import { AppContext } from "../../contexts/AppContext";
import CartItem from "../CartItem/cart-item";
import formatCurrency from "../../util/FormatCurrency";

export default function Cart() {

  const { isCartVisible, cartItems } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc;
  }, 0)

  

  return (
    <section className={`cart ${isCartVisible ? 'cart_active' : ''}`}>
      <div className="items">
        {cartItems.map((cartItem =>
          <CartItem
          key={cartItem.id}
          data={cartItem}
          />))}
      </div>

      <div className="cart_resume">
          {formatCurrency(totalPrice, 'BRL')}

          <button></button>
      </div>
    </section>
  );
}
