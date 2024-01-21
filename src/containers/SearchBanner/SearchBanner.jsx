import styles from "./SearchBanner.module.scss";
import SearchForm from "../../components/SearchForm/SearchForm";

const SearchBanner = () => {
  return (
    <section className={styles.banner}>
      <h1>Book Search</h1>
      <SearchForm />
      <div className={styles.banner__info}>
        <h5>
          Welcome! Enter your search term above to search through the Google
          books API
        </h5>
      </div>
    </section>
  );
};

export default SearchBanner;
