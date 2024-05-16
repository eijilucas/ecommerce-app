
import Header from './../../components/Header/header';
import Products from './../../components/Products/products';
import Cart from './../../components/Cart/cart';

export default function Home() {
    return(
        <div className="home">
            <Header />
            <Products />
            <Cart />
        </div>
    )
}