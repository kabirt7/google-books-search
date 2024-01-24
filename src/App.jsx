import styles from "./App.module.scss";
import InfoModal from "./components/InfoModal/InfoModal";
import BookGrid from "./containers/BookGrid/BookGrid";
import SearchBanner from "./containers/SearchBanner/SearchBanner";
import SearchTermContextProvider from "./context/SearchTermContextProvider";

import { useContext } from "react";
import Modals from "./containers/Modals/Modals";

function App() {
  return (
    <SearchTermContextProvider>
      <section>
        <main className={styles.mainContent}>
          <SearchBanner />
          <BookGrid />
        </main>
        <Modals />
      </section>
    </SearchTermContextProvider>
  );
}

export default App;
