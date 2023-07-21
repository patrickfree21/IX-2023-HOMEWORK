import {
    collection,
    addDoc,
    query,
    getDocs,
    doc,
    deleteDoc,
    updateDoc,
  } from 'firebase/firestore';
  
  import { db } from '../firebase/firebase';
  import { Book } from '../models/book';
  
  class BookService {
    constructor() {
      this.collection = 'books';
    }
  
    async fetchBooks() {
      const collectionRef = collection(db, this.collection);
      const q = query(collectionRef);
      const querySnapshot = await getDocs(q);
  
      const books = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const book = new Book(data.title, data.author, data.isbn);
        books.push(book);
      });
  
      return books;
    }
  
    async createBook(book) {

      const { title, author, isbn } = book;
  if (!title || !author || !isbn) {
    throw new Error("Invalid book data. Title and author are required.");
  }
      const collectionRef = collection(db, this.collection);
  
      const docRef = await addDoc(collectionRef, {
        title: book.title,
        author: book.author,
        isbn: book.isbn,
      });
      return book;
    }
  
    async updateBook(book) {
      const docRef = doc(db, this.collection, book.isbn);
  
      await updateDoc(docRef, {
        title: book.name,
        author: book.author,
      });
  
      return book;
    }
  
    async deleteBook(bookISBN) {
      const docRef = doc(db, this.collection, bookISBN);
      await deleteDoc(docRef);
    }
  }
  
  const service = new BookService();
  export default service;