import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { SearchTermContext } from "../../context/SearchTermContextProvider";
import styles from "./BookModal.module.scss";

const InfoModal = () => {
  const { bookModal } = useContext(SearchTermContext);
  const { setIsModalShown } = useContext(SearchTermContext);
  const book = bookModal[0].book;

  useEffect(() => {
    console.log(book.title);
  }, [bookModal]);

  return (
    <div className={styles.modal} onClick={() => setIsModalShown(false)}>
      <div className={styles.modal__content}>
        <h4>{book.title}</h4>
        {book.pages && <p>Pages: {book.pages}</p>}
        {book.publisher && <p>Publisher: {book.publisher}</p>}
        {book.printType && <p>Print Type: {book.printType}</p>}
      </div>
    </div>
  );
};

export default InfoModal;
