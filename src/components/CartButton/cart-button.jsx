import { useContext } from "react";
import "./cart-button.scss";
import { BsCart3 } from "react-icons/bs";
import { AppContext } from "../../contexts/AppContext";

export default function CartButton() {

  const { isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button className="cart_btn" onClick={()=> setIsCartVisible(!isCartVisible)}>
      <BsCart3 size={30} stroke="2" />
      <span className="cart_status">1</span>
    </button>
  );
}
