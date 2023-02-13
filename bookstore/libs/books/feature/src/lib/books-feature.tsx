import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {getBooks} from "@bookstore/books/data-access"
import {Books} from "@bookstore/books/ui"

export function BooksFeature() {
  const [books,setBooks] = useState<any[]>([]);

  useEffect(() => {
    getBooks().then(setBooks)
  },[

  ]);
  return (
    <>
      <h2>Books</h2>
      <Books books={books} />
    </>
  )
}

export default BooksFeature;
