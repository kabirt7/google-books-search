import { useEffect, useContext, useState } from "react";
import { getBooks } from "../../data/getBooksLogic";
import { SearchTermContext } from "../../context/SearchTermContextProvider";
import styles from "./BookGrid.module.scss";
import BookItem from "../../components/BookItem.jsx/BookItem";

const BookGrid = () => {
  const [bookArr, setBookArr] = useState(null);
  const { searchTerm } = useContext(SearchTermContext);

  useEffect(() => {
    getBooks({ searchTerm }).then((result) => {
      setBookArr(result);
    });
  }, [searchTerm]);

  return (
    <div className={styles.grid}>
      {bookArr &&
        bookArr.map((book) => (
          <BookItem
            title={book.title}
            authors={book.authors}
            publishDate={book.publishDate}
          />
        ))}
    </div>
  );
};

export default BookGrid;
