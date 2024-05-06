import "./search-bar.scss";
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";

export default function SearchBar() {

    const {searchValue, setSearchValue} = useContext();

    const handleSearch = () => {
        
    }

  return (
    <section className="search">
      <input 
      type="text" 
      placeholder="What can we help you find today?" 
      value={searchValue}
      onChange={(e) => [setSearchValue(e.target.value)]}
      />

      <button type="submit" onClick={handleSearch}>
        <FaSearch size={20} />
      </button>

    </section>
  );
}
