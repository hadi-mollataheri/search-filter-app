// This component is responsible for showing name of the people from our mock data according to user search.

import React from "react";
import MockDate from "../../utilities/MOCK_DATA.json";

function Data({ searchInput }) {
  // Use searchInput sate prop to update the shown names
  // Let say if searchInput is empty then show all names or as soon as there
  // was a character match then shown those words that has their character(s) matched.

  function filter() {
    return MockDate.map((personObject) => {
      // Concatenate first and last names and turn it to lowerCase for evert personObj
      // and then check for matches in fullName(Spaces is recognized too and it's more cleaner)
      const fullName =
        `${personObject.first_name} ${personObject.last_name}`.toLowerCase();
      if (!searchInput || fullName.includes(searchInput.toLowerCase())) {
        return (
          <p
            className="p-1"
            key={personObject.id}
          >{`${personObject.first_name} ${personObject.last_name}`}</p>
        );
      } else {
        // render nothing
        return null;
      }
    });
  }

  return (<div>{filter()}</div>);
}

export default Data;
