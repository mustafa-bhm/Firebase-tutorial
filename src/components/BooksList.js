import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import BookDataService from "../services/book.services";

function BooksList({ getBookId }) {
  const [bookList, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const data = await BookDataService.getAllBokks();
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await BookDataService.deleteBook(id);
    getBooks();
  };
  return (
    <div>
      <div className="mb-2 refresh">
        <Button variant="dark edit" onClick={getBooks}>
          Refresh List
        </Button>
      </div>

      <div className="booksContainer">
        {bookList.map((book, index) => {
          return (
            <div className="bookCard" key={book.id}>
              <img src={book.cover} className="book-cover" alt="book-cover" />
              <p>Title: {book.title}</p>
              <p>Author: {book.author}</p>
              <p>Status: {book.status}</p>
              <div className="btns">
                <div className="edit" onClick={(e) => getBookId(book.id)}>
                  Edit
                </div>

                <div className="delete" onClick={(e) => deleteHandler(book.id)}>
                  Delete
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BooksList;
