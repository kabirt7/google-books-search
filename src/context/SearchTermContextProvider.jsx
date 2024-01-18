import { useState, createContext } from "react";

export const SearchTermContext = createContext(null);

const SearchTermContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("book");

  const dataToPass = { searchTerm, setSearchTerm };
  return (
    <SearchTermContext.Provider value={dataToPass}>
      {children}
    </SearchTermContext.Provider>
  );
};

export default SearchTermContextProvider;
