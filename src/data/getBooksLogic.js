export const getBooks = async (obj) => {
  // if (obj === "") {

  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${obj.searchTerm}&key=AIzaSyBInnS-Dn8weow8Vi8v9LAagNoLWY9ZwEE`
  );
  const bookData = await response.json();

  const bookArray = bookData.items;

  const bookDataToReturn = bookArray.map((book) => {
    const image =
      (book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail) ||
      (book.volumeInfo.imageLinks &&
        book.volumeInfo.imageLinks.smallThumbnail) ||
      "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";

    const authors = book.volumeInfo.authors
      ? book.volumeInfo.authors.join(", ")
      : Math.random() * 1000000000;

    const description =
      book.volumeInfo.description && book.volumeInfo.description.length > 200
        ? `${book.volumeInfo.description.slice(0, 200)}...`
        : book.volumeInfo.description;

    const id =
      book.volumeInfo.industryIdentifiers &&
      book.volumeInfo.industryIdentifiers[0]
        ? book.volumeInfo.industryIdentifiers[0].identifier
        : undefined;

    const cleanedBookInfo = {
      title: book.volumeInfo.title,
      authors: authors,
      publishDate: book.volumeInfo.publishedDate,
      imageURL: image,
      desc: description,
      id: id,
      pages: book.volumeInfo.pageCount,
      publisher: book.volumeInfo.publisher,
      printType: book.volumeInfo.printType,
    };

    return cleanedBookInfo;
  });
  console.log(bookDataToReturn);
  return bookDataToReturn;
};
