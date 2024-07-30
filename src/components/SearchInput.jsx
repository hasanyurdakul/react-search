import React from "react";

function SearchInput() {
  return (
    <div className="input-box">
      <input
        type="search"
        name="search-form"
        id="search-form"
        className="search-input"
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search user"
      />
    </div>
  );
}

export default SearchInput;
