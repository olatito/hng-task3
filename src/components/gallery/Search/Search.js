import React from 'react';
import './Search.css';


const Search = ({ handleSearch, searchInput}) => {

  return (
    <div className>
      <form onSubmit={handleSearch} className='searchBar'>
        <input 
          type="search" 
          className='inputField'
          placeholder='Search Images'
          ref={searchInput}/>
        <button onClick={(e) => handleSearch(e)} className='searchButton'>Search</button>
      </form>
    </div>
  )
}

export default Search
