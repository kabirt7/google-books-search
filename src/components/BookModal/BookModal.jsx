import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { SearchTermContext } from "../../context/SearchTermContextProvider";
import styles from "./BookModal.module.scss";

const BookModal = () => {
  const { bookModal } = useContext(SearchTermContext);
  const { setIsModalShown } = useContext(SearchTermContext);
  const book = bookModal[0].book;

  useEffect(() => {
    console.log(book.title);
  }, [bookModal]);

  return (
    <section className={styles.wrap}>
      <div className={styles.modal}>
        {book.title && <h4>{book.title}</h4>}
        {book.imageURL && <img src={book.imageURL} />}
        {book.pages && <p>Pages: {book.pages}</p>}
        {book.publisher && <p>Publisher: {book.publisher}</p>}
        {book.printType && <p>Print Type: {book.printType}</p>}
        {book.descFull && <p>{book.descFull}</p>}
        <button
          className={styles.modal__button}
          onClick={() => setIsModalShown(false)}
        >
          Close
        </button>
      </div>
    </section>
  );
};

export default BookModal;
