import styles from "./BookItem.module.scss";
import { useRef, useEffect, useContext } from "react";
import { SearchTermContext } from "../../context/SearchTermContextProvider";

const BookItem = ({ title, authors, publishDate, image, desc, book }) => {
  const imageRef = useRef(null);
  // const { setBookModal } = useContext(SearchTermContext);

  const { setBookModal } = useContext(SearchTermContext);
  const { setIsModalShown } = useContext(SearchTermContext);

  const modalLoad = () => {
    setBookModal([{ book }]);
    console.log({ book });
    setIsModalShown(true);
  };

  const handleImageLoad = () => {
    const imageHeight = imageRef.current.clientHeight;
    imageRef.current.parentElement.style.height = `${imageHeight}px`;
  };

  useEffect(() => {
    window.addEventListener("resize", handleImageLoad);

    return () => {
      window.removeEventListener("resize", handleImageLoad);
    };
  }, []);

  return (
    <>
      <article className={styles.book} onClick={() => modalLoad()}>
        <img src={image} ref={imageRef} onLoad={() => handleImageLoad()} />
        <div className={styles.book__modal}>
          <main className={styles.book__text}>
            <h3>{title}</h3>
            <p>{authors}</p>
            <p>{desc}</p>
            <p>Published: {publishDate}</p>
          </main>
        </div>
      </article>
    </>
  );
};

export default BookItem;
