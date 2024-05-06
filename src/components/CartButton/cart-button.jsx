import "./cart-button.scss";
import { BsCart3 } from "react-icons/bs";

export default function CartButton() {
  return (
    <button className="cart_btn">
      <BsCart3 size={30} stroke="2" />
      <span className="cart_status">1</span>
    </button>
  );
}
