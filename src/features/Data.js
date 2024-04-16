import React from "react";
import MockDate from "../utilities/MOCK_DATA.json";

function Data() {
  return (
    <div>
      {MockDate.map((personObject) => {
        return (
          <p
            key={personObject.id}
          >{`${personObject.first_name} ${personObject.last_name}`}</p>
        );
      })}
    </div>
  );
}

export default Data;


