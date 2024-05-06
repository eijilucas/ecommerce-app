import "./search-bar.scss";
import { FaSearch } from "react-icons/fa";
import { useContext, useState } from "react";
import { AppContext } from '../../contexts/AppContext';
import fetchProducts from '../../api/FetchProducts';

export default function SearchBar() {

    const [searchValue, setSearchValue] = useState("");
    const { setProducts } = useContext(AppContext);

    const handleSearch = async (e) => {
        e.preventDefault();
        const products = await fetchProducts(searchValue);
        setProducts(products)
        setSearchValue("")
    }

  return (
    <form className="search" onSubmit={handleSearch}>
      <input 
      type="text" 
      placeholder="What can we help you find today?" 
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      />

      <button type="submit">
        <FaSearch size={20} />
      </button>

    </form>
  );
}
