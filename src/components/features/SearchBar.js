import React from "react";

function SearchBar({searchInput, setSearchInput }) {
  // Create an event handler for input's onChange so that we can use it for
  // updating the App's searchInput state via the passed in setSearchInput passed in prop.
  const handleChange = ({ target }) => {
    setSearchInput(target.value);
  };

  return (
    <input
      type="text"
      onChange={handleChange}
      value={searchInput}
      placeholder="Search..."
      className="border border-black p-2 m-5"
    />
  );
}

export default SearchBar;
