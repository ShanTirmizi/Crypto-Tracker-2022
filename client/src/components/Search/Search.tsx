import React from 'react';
import './Search.css';
import { SearchProps } from '../../utils/interface';

const Search = (props: SearchProps) => {
  const { search, setSearch, handlePageClick } = props;
  return (
    <>
      <form className="search__form">
        <input
          className="search__input"
          type="text"
          value={search}
          name="search"
          placeholder="Search..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handlePageClick({ selected: 0 });
            setSearch(e.target.value);
          }}
        />
      </form>
    </>
  );
};

export default Search;
