import React from 'react';

import './searchbar.scss';

const Search = ({
  setSearch,
  search,
  dataSearch,
}) => {
  const formSubmit = (event) => {
    event.preventDefault();
    dataSearch();
  };
  return (
    <div className="input__search">
      <form className="form" onSubmit={formSubmit}>
        <input
          className="searchbar"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          placeholder="Sélectionne ta catégorie et recherche un son"
          value={search}
        />

      </form>
    </div>
  );
};

export default Search;
