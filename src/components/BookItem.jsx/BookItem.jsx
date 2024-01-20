import styles from "./BookItem.module.scss";

const BookItem = ({ title, authors, publishDate, image }) => {
  // const articleStyle = {
  //   backgroundImage: `url(${image})`,
  //   backgroundSize: "cover",
  //   // backgroundPosition: "center",
  // };
  return (
    <>
      <article className={styles.book}>
        <img src={image} />
        <div className={styles.book__modal}>
          <h3>{title}</h3>
          <p>{authors}</p>
          <p>{publishDate}</p>
        </div>
      </article>
    </>
  );
};

export default BookItem;
