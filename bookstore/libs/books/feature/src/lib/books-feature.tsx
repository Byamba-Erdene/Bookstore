import { useEffect, useState } from 'react';
import {getBooks} from "@bookstore/books/data-access"
import {Books} from "@bookstore/books/ui"
import { IBook } from '@bookstore/shared-models';
import { useDispatch } from 'react-redux';
import {cartActions} from "@bookstore/cart/data-access"

export function BooksFeature() {
  const [books,setBooks] = useState<IBook[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getBooks().then(setBooks)
  },[

  ]);
  return (
    <>
      <h2>Books</h2>
      <Books books={books} onAdd={book => dispatch(
        cartActions.add({
          id:book.id,
          description:book.title,
          cost:book.price,
        })
      )
      }/>
    </>
  )
}

export default BooksFeature;
