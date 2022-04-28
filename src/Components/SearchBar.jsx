import React, { useState } from "react";

function SearchBar(props) {
  const [searchString, setSearchString] = useState("");

  const searchNews = (event) => {
    setSearchString(event.target.value);
  };

  return (
    <nav className="navbar navbar-light bg-light mb-5">
      <div className="container">
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => searchNews(e)}
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={props.getNewsData(searchString)}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default SearchBar;
