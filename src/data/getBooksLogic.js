export const getBooks = async (obj) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${obj.searchTerm}`
  );
  const bookData = await response.json();

  const bookArray = bookData.items;

  const bookDataToReturn = bookArray.map((book) => {
    const authors = book.volumeInfo.authors
      ? book.volumeInfo.authors.join(", ")
      : undefined;
    const cleanedBookInfo = {
      title: book.volumeInfo.title,
      authors: authors,
      publishDate: book.volumeInfo.publishedDate,
    };

    return cleanedBookInfo;
  });
  console.log(bookDataToReturn);
  return bookDataToReturn;
};
