import { useContext } from "react";
import CountriesContext from "../../context/countriesContext";
// import Filter from "./Filter/Filter";
import "./Search.css";

export default function Search() {
  const { searchCountry, handleSearch } = useContext(CountriesContext);

  return (
    <div className="search-container">
      <img
        className="magnifying-glass"
        src="images/search.svg"
        alt="magnifying-glass"
      />
      <input
        className="search-box"
        value={searchCountry.term}
        onChange={handleSearch}
        placeholder="Search for a country..."
      />
      {/* <Filter /> */}
    </div>
  );
}
