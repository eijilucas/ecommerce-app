import { useContext, useEffect } from "react";
import "./products.scss";
import fetchProducts from "../../api/FetchProducts";
import { AppContext } from "../../contexts/AppContext";
import ProductCard from "../ProductCard/product-card";
import Loading from "../Loading/loading";

export default function Products() {
  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  useEffect(() => {
    fetchProducts("iphones").then((response) => setProducts(response));
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <section className="products container">
      {products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </section>
  );
}
