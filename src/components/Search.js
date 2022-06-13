import React, { useState } from "react";
import "../styles/search.css";
import getImages from "../requests/getImages";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState();

  const handleSubmit = (event) => 
    event.preventDefault();
    setSearchResults(getImages(value));

    return(
        <>
        <form className="search-form" onSubmit={handleSubmit}>
          <input type="text" className="search-input" placeholder="search away" 
            onChange={(event) => setValue(event.target.value)} />
          <button type="submit" className="search-button">Go!</button>
          </form>
        </>
    );
};

export default Search;