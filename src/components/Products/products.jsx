import { useContext, useEffect } from "react"
import "./products.scss"
import fetchProducts from "../../api/FetchProducts"
import { AppContext } from "../../contexts/AppContext"
import ProductCard from "../ProductCard/product-card";

export default function Products() {

    const { products, setProducts } = useContext(AppContext);

    useEffect(() => {
        fetchProducts("celulares").then((response) => setProducts(response))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <section className="products container">
            {products.map((product) => 
            <ProductCard
            key={product.id}
            data={product}
            />)}
        </section>
    )
}