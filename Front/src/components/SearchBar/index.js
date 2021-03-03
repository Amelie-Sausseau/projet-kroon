import React from 'react';

import './searchbar.scss';

const SearchBar = ({ placeholder, handleChange }) => {
  const formSubmit = (event) => {
    event.preventDefault();
    dataSearch();
  };
  return (
    <form action="/" className="formSearch" onSubmit={formSubmit}>
      <label htmlFor="header-search">
        <span className="visually-hidden">Rechercher un son</span>
      </label>
      <input
        type="text"
        id="header-search"
        placeholder={placeholder}
        onChange={handleChange}
      />
      <button type="submit" className="Search">Rechercher</button>
    </form>
  );
};

export default SearchBar;
