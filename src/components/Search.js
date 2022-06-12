import React, { useState } from "react";
import "../styles/search.css";
import getImages from "../requests/getImages";

const Search = () => {
  const [value, setValue] = useState();

  const handleSubmit = (event) => 
    event.preventDefault();
    getImages(value);

    return(
        <>
        <form className="search-form" onSubmit={handleSubmit}>
          <input type="text" className="search-input" placeholder="search away" 
            onChange={(e) => setValue(e.target.value)} />
          <button type="submit" className="search-button">Search</button>
          </form>
        </>
    );
};

export default Search;