import React, { useState } from 'react';
import axios from 'axios';

const BookSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [bookInfo, setBookInfo] = useState(null);

  const apiKey = 'AIzaSyAvPDUDQKVhWGTHldUMK_VQOBhD4Jm4xQg';

  const searchBooks = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`
      );

      const bookData = response.data.items[0].volumeInfo;
      const isbn = bookData.industryIdentifiers[0].identifier;

      setBookInfo({
        title: bookData.title,
        authors: bookData.authors,
        description: bookData.description,
        isbn: isbn,
        thumbnail: bookData.imageLinks.thumbnail,
      });
    } catch (error) {
      console.error('Error fetching book information:', error);
      setBookInfo(null);
    }
  };

  return (
    <div>
      <label htmlFor="searchInput">Search for a Book:</label>
      <input
        type="text"
        id="searchInput"
        placeholder="Enter book title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={searchBooks}>Search</button>

      {bookInfo && (
        <div>
          <h2>{bookInfo.title}</h2>
          <p>Authors: {bookInfo.authors ? bookInfo.authors.join(', ') : 'Unknown'}</p>
          <p>Description: {bookInfo.description || 'Not available'}</p>
          <p>ISBN: {bookInfo.isbn}</p>
          <img src={bookInfo.thumbnail} alt={`${bookInfo.title} Cover`} />
        </div>
      )}
    </div>
  );
};

export default BookSearch;
