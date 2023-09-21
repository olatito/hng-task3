import React from "react";
import Search from "../Search/Search";

const Header = ({ handleSearch, searchInput }) => {
  return (
    <div>
      <div className="headerStyle">
        <div>
          <h1>DROP n DRAG Gallery</h1>
        </div>
        <div>
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
