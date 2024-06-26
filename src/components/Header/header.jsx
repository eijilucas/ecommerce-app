import "./header.scss";
import { MdLocalOffer } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import SearchBar from "../SearchBar/search-bar";
import CartButton from "../CartButton/cart-button";
import { FaRegCircleUser } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineExitToApp } from "react-icons/md";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="top_section">
      <div className="header">
        <div className="header_left">
          <div className="logotype">
            <h2>Next Buy</h2>
            <MdLocalOffer size={20} />
          </div>

          <div className="menu">
            <RxHamburgerMenu size={35} stroke="2" />
          </div>

          <div>
            <SearchBar />
          </div>
        </div>

        <div className="header_right">
          <CartButton />
        </div>
      </div>

      <div className="navigation">
            <div className="navigation_left">
                <a href="*">Top Deals</a>
            </div>

            <div className="navigation_right">
                <button type="button" className="account" onClick={toggleDropdown}>
                    <FaRegCircleUser size={20}/>
                    <span className="account_text">Account</span>
                    <RiArrowDropDownLine size={20}/>
                </button>
                {isOpen && (
                  <ul className="dropdown_menu">
                    <li className="dropdown_item"><FaRegUserCircle/>Meu perfil</li>
                    <li className="dropdown_item"><MdOutlineExitToApp/>Sair da conta</li>
                  </ul>
                )}
                
                <button type="button" className="order_status">
                    <span>Order Status</span>
                    <RiArrowDropDownLine size={20}/>
                </button>
            </div>
        </div>
    </section>
  );
}
