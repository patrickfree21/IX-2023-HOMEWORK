import './App.css';
import { useState, useEffect } from 'react';
import { Book } from './models/book';

import 'bootstrap/dist/css/bootstrap.min.css';
import BookForm from './components/BookForm';
import BookTable from './components/BookTable';

import BookService from './services/book-service';

function App() {
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);


  useEffect(() => {
    if (!books.length) {
      onInitialLoad();
    }
  }, []);

  async function onInitialLoad() {
    try {
      const books = await BookService.fetchBooks();
      setBooks(books);
    } catch (err) {
      console.log(err);
    }
  }

  async function onBookCreate(title) {
    const book = await BookService.createBook(new Book(title, null, null));
    setBooks([...books, book]);
  }

  async function onBookDelete(bookISBN) {
    await BookService.deleteBook(bookISBN);
    setBooks(books.filter((book) => book.isbn !== bookISBN));
  }

  async function onBookEdit(bookISBN) {
    await BookService.deleteBook(bookISBN);
    setBooks(books.filter((book) => book.isbn !== bookISBN));
  }


  return (
    <div className="m-5">
      <div className="card p-4">
        <BookForm onBookCreated={onBookCreate} bookToEdit={bookToEdit} />
        <BookTable
          books={books}
          onBookDelete={onBookDelete}
          onBookEdit={onBookEdit}
        />
      </div>
    </div>
  );
}

export default App;