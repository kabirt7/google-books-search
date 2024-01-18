import styles from "./SearchBanner.module.scss";
import SearchForm from "../../components/SearchForm/SearchForm";

const SearchBanner = () => {
  return (
    <section className={styles.banana}>
      <SearchForm />
    </section>
  );
};

export default SearchBanner;
