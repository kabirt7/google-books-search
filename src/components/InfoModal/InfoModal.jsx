import React from "react";
import styles from "./InfoModal.module.scss";
import { useContext } from "react";
import { SearchTermContext } from "../../context/SearchTermContextProvider";
import { useEffect } from "react";

const InfoModal = () => {
  const { isInfoClicked, setIsInfoClicked } = useContext(SearchTermContext);
  const classes = isInfoClicked
    ? `${styles.visible} ${styles.wrap}`
    : `${styles.invisible}`;

  useEffect(() => {
    console.log(isInfoClicked);
  }, [isInfoClicked]);
  return (
    <section className={classes}>
      <div className={styles.info}>
        <p>
          Welcome! Enter your search term above to search through the Google
          books API
        </p>
        <button
          className={styles.info__button}
          onClick={() => setIsInfoClicked(false)}
        >
          Close
        </button>
      </div>
    </section>
  );
};

export default InfoModal;
