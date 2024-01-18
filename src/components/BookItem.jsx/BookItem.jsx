import styles from "./BookItem.module.scss";

const BookItem = ({ title, authors, publishDate }) => {
  return (
    <>
      <article className={styles.book}>
        <h3>{title}</h3>
        <p>{authors}</p>
        <p>{publishDate}</p>
      </article>
    </>
  );
};

export default BookItem;
