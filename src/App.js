import SearchBar from "./features/SearchBar";
import Data from "./features/Data";

function App() {
  return (
    <div className="text-center">
      <header>
        <SearchBar />
      </header>

      <main>
        <Data />
      </main>
    </div>
  );
}

export default App;
