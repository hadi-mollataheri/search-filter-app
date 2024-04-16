import { useState } from "react";

import SearchBar from "./features/SearchBar";
import Data from "./features/Data";

function App() {
  // Create a state for storing the user search input
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="text-center">
      <header>
        {/* Pass the setSearchInput to SearchBar component to 
        so it can sync the searchInput with search value of user and store it in our state(searchInput) */}
        <SearchBar setSearchInput={setSearchInput} />
      </header>

      <main>
        {/* Pass the searchInput to Data so we can update the shown list of name based on it */}
        <Data searchInput={searchInput} />
      </main>
    </div>
  );
}

export default App;
