import React, { useState } from "react";
import "../styles/search.css";

const Search = () => {
  const [value, setValue] = useState();

    return(
        <>
        <form className="search-form">
          <input type="text" className="search-input" placeholder="search away :)" 
          onChange={(e) => setValue(e.target.value)} />
          <button type="submit" className="search-button">Search</button>
          </form>
        </>
    );
};

export default Search;