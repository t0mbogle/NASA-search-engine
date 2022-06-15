import React from "react";
import "../styles/searchresults.css";
import PropTypes from "prop-types";

const SearchResults = ({ results }) => {
  if(!results.length) {
    return(<p className="no-search">No Results found!</p>);
    // If results/searchResults prop has a length map over it 
    // and only return the URL of those mapped images, from the getImages function
  } else {

    return(
      <>
        <p className="success-search">Search Results:</p>
        <div className="search-results">
          {results.map((image) => (
            <img className="card-name" src={image} alt="spaceImage" />
          ))}
        </div>
      </>
    );
  }
};

export default SearchResults;

SearchResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.string).isRequired,
};
