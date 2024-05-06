import "./header.scss"
import { MdLocalOffer } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import SearchBar from "../SearchBar/search-bar";

export default function Header() {

    return (
        <section className="header">
            <div className="header_left">
                <div className="logotype">
                    <h2>Next Buy</h2>
                    <MdLocalOffer className="icon"/>                 
                </div>

                <div className="menu">
                    <RxHamburgerMenu size={35} stroke="2"/>
                </div>

                <div>
                    <SearchBar/>
                </div>
            </div>

            <div className="header_right">
                <div className="cart">
                    <BsCart3 size={35} stroke="2"/>
                </div>
            </div>  
        </section>
    )
}