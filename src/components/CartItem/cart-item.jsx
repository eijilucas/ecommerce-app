import { useContext } from "react";
import formatCurrency from "../../util/FormatCurrency"
import "./cart-item.scss"
import { CiSquareRemove } from "react-icons/ci";
import { AppContext } from "../../contexts/AppContext";

export default function CartItem({data}) {

    const { id, thumbnail, title, price } = data;
    const { cartItems, setCartItems } = useContext(AppContext);

    const handleRemove = () => {
        const updatedItems = cartItems.filter((item) => item.id !== id)
        return setCartItems(updatedItems)
    }

    return (
        <section className="cart_item">
            <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="" className="cart_item_img"/>

            <div className="cart_item_infos">
                <h2 className="cart_item_title">{title}</h2>
                <h2 className="cart_item_price">{formatCurrency(price, 'BRL')}</h2>
            </div>

            <button className="cart_item_remove" onClick={handleRemove}>
                <CiSquareRemove/>
            </button>
        </section>
    )
}