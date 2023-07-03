import React, { useRef } from 'react';
// Import createSearchParams
// Import useNavigate
import {  useNavigate, createSearchParams } from 'react-router-dom';


const Search = () => {

  // get navigate function
  const navigate = useNavigate();

  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const searchQuery = {
      name: searchInputRef.current.value //we use this to get a reference of the input value
    }
    
    // use createSearchParams 
    const query = createSearchParams(searchQuery);

    // imperatively redirect with useNavigate() returned function
    navigate({
      pathname: '/search', //sets the path of the component to render 
      search: `?${query}`  //sets the extra query needed to be searched
    })
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
