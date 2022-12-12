import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const bookCollectionRef = collection(db, "books");
class BookDataService {
  addBooks = (newBook) => {
    return addDoc(bookCollectionRef, newBook);
  };
  updateBooks = (id, updatedBook) => {
    // to check if the book already exist in our collection
    const bookDoc = doc(db, "books", id);
    // update the book
    return updateDoc(bookDoc, updatedBook);
  };
  deleteBook = (id) => {
    // to check if the book already exist in our collection
    const bookDoc = doc(db, "books", id);
    return deleteDoc(bookDoc);
  };

  // to get all the books in the collection
  getAllBokks = () => {
    return getDocs(bookCollectionRef);
  };

  // to get a single book
  getBook = (id) => {
    // to check if the book already exist in our collection
    const bookDoc = doc(db, "books", id);
    return getDoc(bookDoc);
  };
}

export default new BookDataService();
