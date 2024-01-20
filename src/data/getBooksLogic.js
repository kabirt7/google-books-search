export const getBooks = async (obj) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${obj.searchTerm}&key=AIzaSyBInnS-Dn8weow8Vi8v9LAagNoLWY9ZwEE`
  );
  const bookData = await response.json();

  const bookArray = bookData.items;

  const bookDataToReturn = bookArray.map((book) => {
    const image =
      book.volumeInfo.imageLinks.thumbnail ||
      book.volumeInfo.imageLinks.smallThumbail ||
      "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";

    const authors = book.volumeInfo.authors
      ? book.volumeInfo.authors.join(", ")
      : undefined;
    const cleanedBookInfo = {
      title: book.volumeInfo.title,
      authors: authors,
      publishDate: book.volumeInfo.publishedDate,
      imageURL: image,
    };

    return cleanedBookInfo;
  });
  console.log(bookDataToReturn);
  return bookDataToReturn;
};
