import "./search-bar.scss";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";


export default function SearchBar() {

    const [searchValue, setSearchValue] = useState("");

    const handleSearch = () => {

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
