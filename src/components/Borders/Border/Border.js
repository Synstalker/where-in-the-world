import { useContext } from "react";
import CountriesContext from "../../../context/countriesContext";
import useFetchCountries from "../../../hooks/useFetchCountries";
import "./Border.css";

export default function Border(props) {
  const { countryCode } = props;
  const { countries, isLoading, error } = useFetchCountries(
    `alpha?codes=${countryCode}`
  );
  const { handleCountryClick } = useContext(CountriesContext);

  return error ? (
    <p className="button__border">{error}</p>
  ) : isLoading ? (
    <p className="button__border">Loading...</p>
  ) : (
    <p
      className="button__border"
      title={countries[0].name.common}
      onClick={handleCountryClick}
    >
      {countries[0].name.common}
    </p>
  );
}
