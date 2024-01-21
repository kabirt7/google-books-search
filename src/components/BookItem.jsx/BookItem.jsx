import styles from "./BookItem.module.scss";
import { useRef, useEffect } from "react";

const BookItem = ({ title, authors, publishDate, image, desc }) => {
  console.log({ desc });
  const imageRef = useRef(null);

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
      <article className={styles.book}>
        <img src={image} ref={imageRef} onLoad={() => handleImageLoad()} />
        <div className={styles.book__modal}>
          <h3>{title}</h3>
          <p>{authors}</p>
          <p>{desc}</p>
          <p>{publishDate}</p>
        </div>
      </article>
    </>
  );
};

export default BookItem;
