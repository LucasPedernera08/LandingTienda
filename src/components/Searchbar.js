import React from "react";
import './Searchbarcss.css';

//aca tengo que dejar el search y los logotipos 


//ESTO ES EL SEARCH//

const SearchBar = ({ handleSearch }) => {
    return (

      <div className="SearchBar">
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => handleSearch(event.target.value)}
      />
      </div>
    );
  };
  
export default SearchBar;