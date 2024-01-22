import { useState, createContext } from "react";

export const SearchTermContext = createContext(null);

const SearchTermContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("book");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [bookModal, setBookModal] = useState([]);
  const [isModalShown, setIsModalShown] = useState(false);

  const dataToPass = {
    searchTerm,
    setSearchTerm,
    formSubmitted,
    setFormSubmitted,
    bookModal,
    setBookModal,
    isModalShown,
    setIsModalShown,
  };
  return (
    <SearchTermContext.Provider value={dataToPass}>
      {children}
    </SearchTermContext.Provider>
  );
};

export default SearchTermContextProvider;
