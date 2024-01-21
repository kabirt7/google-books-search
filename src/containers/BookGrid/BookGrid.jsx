import { useEffect, useContext, useState } from "react";
import { getBooks } from "../../data/getBooksLogic";
import { SearchTermContext } from "../../context/SearchTermContextProvider";
import styles from "./BookGrid.module.scss";
import BookItem from "../../components/BookItem.jsx/BookItem";

const BookGrid = () => {
  const [bookArr, setBookArr] = useState(null);
  const { searchTerm } = useContext(SearchTermContext);
  const { formSubmitted } = useContext(SearchTermContext);
  const { setFormSubmitted } = useContext(SearchTermContext);

  useEffect(() => {
    if (formSubmitted === true) {
      getBooks({ searchTerm }).then((result) => {
        setBookArr(result);
        setFormSubmitted(false);
      });
    }
  }, [searchTerm]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.grid}>
        {bookArr &&
          bookArr.map((book) => (
            <BookItem
              title={book.title}
              authors={book.authors}
              publishDate={book.publishDate}
              image={book.imageURL}
              desc={book.desc}
            />
          ))}
      </div>
    </section>
  );
};

export default BookGrid;
