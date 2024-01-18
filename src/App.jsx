import "./App.scss";
import BookGrid from "./containers/BookGrid/BookGrid";
import SearchBanner from "./containers/SearchBanner/SearchBanner";
import SearchTermContextProvider from "./context/SearchTermContextProvider";

function App() {
  return (
    <SearchTermContextProvider>
      <main>
        <SearchBanner />
        <BookGrid />
      </main>
    </SearchTermContextProvider>
  );
}

export default App;
