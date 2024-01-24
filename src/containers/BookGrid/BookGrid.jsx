import { useEffect, useContext, useState } from "react";
import { getBooks } from "../../data/getBooksLogic";
import { SearchTermContext } from "../../context/SearchTermContextProvider";
import styles from "./BookGrid.module.scss";
import BookItem from "../../components/BookItem/BookItem";
import BookModal from "../../components/BookModal/BookModal";
import Button from "../../components/Button/Button";

const BookGrid = () => {
  const [bookArr, setBookArr] = useState(null);
  const [loading, setLoading] = useState(false);
  const { searchTerm } = useContext(SearchTermContext);
  const { formSubmitted } = useContext(SearchTermContext);
  const { setFormSubmitted } = useContext(SearchTermContext);
  const { increment } = useContext(SearchTermContext);
  const { setIncrement } = useContext(SearchTermContext);

  const classes =
    styles.grid__button +
    (bookArr ? ` ${styles.grid__button__displayed}` : "") +
    (increment >= 40 ? ` ${styles.grid__button__hidden}` : "");

  useEffect(() => {
    console.log({ increment });
    if (formSubmitted === true) {
      setLoading(true);
      getBooks({ searchTerm }, { increment })
        .then((result) => {
          if (result) {
            setBookArr(result);
            console.log(result);
          }
        })
        .catch((error) => {
          alert(error.message);
        })
        .finally(() => {
          setFormSubmitted(false);
          setLoading(false);
        });
    }
  }, [searchTerm, increment]);

  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.grid}>
          {bookArr &&
            !loading &&
            bookArr.map((book) => (
              <BookItem
                book={book}
                title={book.title}
                authors={book.authors}
                publishDate={book.publishDate}
                image={book.imageURL}
                desc={book.desc}
                key={book.id}
              />
            ))}
          {loading && <h3>loading...</h3>}
        </div>
        <Button
          onClick={() => {
            setIncrement((prevIncrement) => prevIncrement + 10);
            setFormSubmitted(true);
          }}
          className={classes}
        >
          More
        </Button>
      </section>
    </>
  );
};
export default BookGrid;
