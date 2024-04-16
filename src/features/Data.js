// This component is responsible for showing name of the people from our mock data.

import React from "react";
import MockDate from "../utilities/MOCK_DATA.json";

function Data({ searchInput }) {
  // Use searchInput sate prop to update the shown names
  // Let say if searchInput is empty then show all names or as soon as there
  // was a character match then shown those words that has their character(s) matched.

  function filter() {
    return MockDate.map((personObject) => {
      if (
        !searchInput ||
        personObject.first_name.toLowerCase().includes(searchInput) ||
        personObject.last_name.toLowerCase().includes(searchInput)
      ) {
        return (
          <p
            key={personObject.id}
          >{`${personObject.first_name} ${personObject.last_name}`}</p>
        );
      } else {
        // render nothing
        return null;
      }
    });
  }

  return <div>{filter()}</div>;
}

export default Data;
