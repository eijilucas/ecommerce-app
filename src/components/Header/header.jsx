import "./header.scss"
import { MdLocalOffer } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import SearchBar from "../SearchBar/search-bar";
import CartButton from "../CartButton/cart-button";

export default function Header() {

    return (
        <section className="header">
            <div className="header_left">
                <div className="logotype">
                    <h2>Next Buy</h2>
                    <MdLocalOffer size={20}/>                 
                </div>

                <div className="menu">
                    <RxHamburgerMenu size={35} stroke="2"/>
                </div>

                <div>
                    <SearchBar/>
                </div>
            </div>

            <div className="header_right">
                <CartButton/>
            </div>  
        </section>
    )
}