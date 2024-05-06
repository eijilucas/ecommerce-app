import { useContext } from "react";
import "./cart.scss";
import { AppContext } from "../../contexts/AppContext";

export default function Cart() {

  const { isCartVisible } = useContext(AppContext);

  return (
    <section className={`cart ${isCartVisible ? 'cart_active' : ''}`}>
      <div className="items"></div>

      <div className="cart_resume"></div>
    </section>
  );
}
