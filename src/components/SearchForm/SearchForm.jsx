import React, { useEffect, useContext, useRef } from "react";
import { SearchTermContext } from "../../context/SearchTermContextProvider";
import Button from "../Button/Button";
import styles from "./SearchForm.module.scss";

const SearchForm = () => {
  const {
    setSearchTerm,
    setFormSubmitted,
    formSubmitted,
    setIsInfoClicked,
    setIncrement,
  } = useContext(SearchTermContext);

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
        <Button
          className={styles.form__button}
          type="submit"
          onClick={() => setIncrement(10)}
        >
          Submit
        </Button>
      </div>
      <div className={styles.form__buttons}>
        <Button
          className={styles.form__button}
          type="button"
          onClick={() => setIsInfoClicked(true)}
        >
          More Info
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
