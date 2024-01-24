import styles from "./SearchBanner.module.scss";
import SearchForm from "../../components/SearchForm/SearchForm";

const SearchBanner = () => {
  return (
    <section className={styles.banner}>
      <h1>Book Search</h1>
      <SearchForm />
    </section>
  );
};

export default SearchBanner;
