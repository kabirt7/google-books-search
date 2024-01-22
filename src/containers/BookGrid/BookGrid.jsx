import { useEffect, useContext, useState } from "react";
import { getBooks } from "../../data/getBooksLogic";
import { SearchTermContext } from "../../context/SearchTermContextProvider";
import styles from "./BookGrid.module.scss";
import BookItem from "../../components/BookItem/BookItem";
import BookModal from "../../components/BookModal/BookModal";

const BookGrid = () => {
  const [bookArr, setBookArr] = useState(null);
  const { searchTerm } = useContext(SearchTermContext);
  const { formSubmitted } = useContext(SearchTermContext);
  const { setFormSubmitted } = useContext(SearchTermContext);
  const { isModalShown } = useContext(SearchTermContext);

  useEffect(() => {
    if (formSubmitted === true) {
      getBooks({ searchTerm })
        .then((result) => {
          if (result) {
            setBookArr(result);
            console.log(result);
          }
          // } else {
          //   throw new Error("Sorry, no books found");
          // }
        })
        .catch((error) => {
          alert(error.message);
        })
        .finally(() => {
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
              book={book}
              title={book.title}
              authors={book.authors}
              publishDate={book.publishDate}
              image={book.imageURL}
              desc={book.desc}
              key={book.id}
            />
          ))}
        {isModalShown && <BookModal />}
      </div>
    </section>
  );
};
export default BookGrid;
