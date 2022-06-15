import React, { useState } from "react";
import "../styles/search.css";
import getImages from "../requests/getImages";
import PropTypes from "prop-types";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
  }

    return(
        <>
        <form className="search-form" onSubmit={handleSubmit}>
          <input type="text" 
            className="search-input" 
            placeholder="Search space..." 
            onChange={(event) => setValue(event.target.value)} />
          <button 
            type="submit" 
            className="search-button">Go!</button>
          </form>
        </>
    );
};

export default Search;

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};