import React, { useEffect, useContext, useRef } from "react";
import { SearchTermContext } from "../../context/SearchTermContextProvider";

const SearchForm = () => {
  const { setSearchTerm, setFormSubmitted, formSubmitted } =
    useContext(SearchTermContext);

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  useEffect(() => {
    setSearchTerm(inputRef.current.value);
    console.log(inputRef.current.value);
  }, [formSubmitted]);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="bookTerm">Book:</label>
      <input type="text" id="bookTerm" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchForm;
