import React from "react";

function SearchBar({setSearchInput}) {

  const handleChange = ({target}) => {
    setSearchInput(target.value);
  }

  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder="Search..."
      className="border border-black p-2 m-5"
    />
  );
}

export default SearchBar;
