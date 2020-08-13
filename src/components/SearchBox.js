import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <form className="my-4 text-center text-muted">
      <label htmlFor="city">Enter a location for weather information</label>
      <input
        type="search"
        name="city"
        class="form-control p-4 font-weight-bold text-light bg-info"
        autoComplete="off"
        onChange={searchChange}
        style={{ letterSpacing: "0.1em" }}
      />
    </form>
  );
};

export default SearchBox;