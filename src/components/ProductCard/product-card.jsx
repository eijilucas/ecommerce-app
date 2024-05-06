import formatCurrency from "../../util/FormatCurrency";
import "./product-card.scss"
import { FaShoppingCart } from "react-icons/fa";

export default function ProductCard({data}) {

    const { thumbnail, title, price } = data;

    return (
        <section className="product_card">
            <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="" className="product_card_img"/>

            <div className="product_card_infos">
                <h2 className="product_card_price">{formatCurrency(price, 'BRL')}</h2>
                <h2 className="product_card_title">{title}</h2>
            </div>

            <button className="add_cart_btn">
                <FaShoppingCart/>
            </button>

        </section>
    )
}