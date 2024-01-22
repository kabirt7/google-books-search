import React, { useEffect, useContext, useRef } from "react";
import { SearchTermContext } from "../../context/SearchTermContextProvider";
import styles from "./SearchForm.module.scss";
import myImage from "../../assets/magnifying-glass.png";
import searchIcon from "../../assets/i.jpg";

const SearchForm = () => {
  const { setSearchTerm, setFormSubmitted, formSubmitted } =
    useContext(SearchTermContext);

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value !== "") {
      setFormSubmitted(true);
    } else {
      alert("please enter valid search term");
    }
  };

  useEffect(() => {
    setSearchTerm(inputRef.current.value);
    console.log(inputRef.current.value);
  }, [formSubmitted]);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" id="bookTerm" ref={inputRef} />
      <div className={styles.form__buttons}>
        <button type="submit">
          {/* <img src={myImage} className={styles.form__icon} /> */}
          Submit
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
