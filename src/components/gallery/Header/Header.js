import React from "react";
import Search from "../Search/Search";
import './Header.css';

const Header = ({ handleSearch, searchInput }) => {
  return (
    <div>
      <div className="headerStyle">
        <div className="h1div">
          <h1>DROP n DRAG Gallery</h1>
        </div>
        <div className="searchBar">
          <Search 
            handleSearch={(e) => handleSearch(e)}
            searchInput={searchInput} 
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
