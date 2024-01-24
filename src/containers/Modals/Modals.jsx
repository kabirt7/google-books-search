import { useContext } from "react";
import BookModal from "../../components/BookModal/BookModal";
import InfoModal from "../../components/InfoModal/InfoModal";
import { SearchTermContext } from "../../context/SearchTermContextProvider";
useContext;

const Modals = () => {
  const { isModalShown } = useContext(SearchTermContext);
  return (
    <section>
      <InfoModal />
      {isModalShown && <BookModal />}
    </section>
  );
};

export default Modals;
