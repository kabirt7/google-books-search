import { useState, createContext } from "react";

export const SearchTermContext = createContext(null);

const SearchTermContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("book");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const dataToPass = {
    searchTerm,
    setSearchTerm,
    formSubmitted,
    setFormSubmitted,
  };
  return (
    <SearchTermContext.Provider value={dataToPass}>
      {children}
    </SearchTermContext.Provider>
  );
};

export default SearchTermContextProvider;
