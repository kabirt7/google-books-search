import { useContext, useRef } from "react";
import { SearchTermContext } from "../../context/SearchTermContextProvider";

const SearchForm = () => {
  const { setSearchTerm } = useContext(SearchTermContext);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputRef.current.value);
    console.log(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="bookTerm">Book:</label>
      <input type="text" id="bookTerm" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchForm;
