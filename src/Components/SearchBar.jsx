import React from "react";

function SearchBar() {
  return (
    <nav className="navbar navbar-light bg-light mb-5">
      <div className="container">
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default SearchBar;
