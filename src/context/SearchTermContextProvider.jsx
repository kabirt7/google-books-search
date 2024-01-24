import { useState, createContext } from "react";

export const SearchTermContext = createContext(null);

// soz i know this is cooked, wanted your advice on how to break down

const SearchTermContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("book");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [bookModal, setBookModal] = useState([]);
  const [isModalShown, setIsModalShown] = useState(false);
  const [isInfoClicked, setIsInfoClicked] = useState(false);
  const [increment, setIncrement] = useState(10);

  const dataToPass = {
    searchTerm,
    setSearchTerm,
    formSubmitted,
    setFormSubmitted,
    bookModal,
    setBookModal,
    isModalShown,
    setIsModalShown,
    isInfoClicked,
    setIsInfoClicked,
    increment,
    setIncrement,
  };
  return (
    <SearchTermContext.Provider value={dataToPass}>
      {children}
    </SearchTermContext.Provider>
  );
};

export default SearchTermContextProvider;
