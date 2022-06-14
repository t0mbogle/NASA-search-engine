import React from "react";
import "../styles/searchresults.css";

const SearchResults = ({ results }) => {
  if(!results.length) {
    return <p>No Results</p>
    // If results/searchResults prop has a length map over it 
    // and only return the URL of those mapped images, from the getImages function
  } else {

    return(
      <>
        <p className="search-title">Search Results:</p>
        <div className="search-results">
          {results.map((image) => (
            <img className="card-name" src={image} alt="space-pic" />
          ))}
        </div>
      </>
    );
  }
};

export default SearchResults;
