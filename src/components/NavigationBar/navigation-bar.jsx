import "./navigation-bar.scss"
import { FaRegCircleUser } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function NavigationBar() {
    return(
        <section className="navigation">
            <div className="navigation_left">
                <a href="*">Top Deals</a>
            </div>

            <div className="navigation_right">
                <button type="button" className="account">
                    <FaRegCircleUser size={20}/>
                    <span className="account_text">Account</span>
                    <RiArrowDropDownLine size={20}/>
                </button>
                
                <button type="button" className="order_status">
                    <span>Order Status</span>
                    <RiArrowDropDownLine size={20}/>
                </button>
            </div>
        </section>
    )
}