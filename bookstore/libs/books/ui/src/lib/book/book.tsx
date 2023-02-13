import styled from 'styled-components';
import {Button} from "@bookstore/ui"

export interface BookProps {
  book: any;
  onAdd:(book:any)=>void
}

const StyledBook = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    &:last-child {
    border-bottom: none;
    }
    > span {
    padding: 1rem 0.5rem;
    margin-right: 0.5rem;
    }
    .title {
    flex: 1;
    }
    .rating {
      color: #999;
      }
    .price {
    color: #478d3c;
    }
    .button {
      margin-right: 0;
    }
`;

export function Book({book, onAdd}: BookProps) {
  const handleAdd = () => onAdd(book);
  return (
    <StyledBook>
      <span className='title'>
        {book.title} by <em>{book.author}</em>
      </span>
      <span className='rating'>{book.rating}</span>
      <span className='price'>${book.price}</span>
      <span className='button'>
        <Button onClick={handleAdd}>Add to Cart</Button>
      </span>
    </StyledBook>
  );
}

export default Book;
