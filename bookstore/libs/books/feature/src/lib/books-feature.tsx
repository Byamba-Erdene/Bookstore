import { useEffect, useState } from 'react';
import {getBooks} from "@bookstore/books/data-access"
import {Books, Book} from "@bookstore/books/ui"
import { IBook } from '@bookstore/shared-models';

export function BooksFeature() {
  const [books,setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    getBooks().then(setBooks)
  },[

  ]);
  return (
    <>
      <h2>Books</h2>
      <Books books={books} onAdd={book => alert(`Added ${book.title}`)}/>
    </>
  )
}

export default BooksFeature;
