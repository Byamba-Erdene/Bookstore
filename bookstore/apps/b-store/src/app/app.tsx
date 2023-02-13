import { Route, Routes, Link, Navigate } from 'react-router-dom';

import { BooksFeature } from '@bookstore/books/feature';

import {
  GlobalStyles,
  Header,
  Main,
  NavigationItem,
  NavigationList
} from "@bookstore/ui"


export function App() {
  return (
    <>
      <GlobalStyles />
      <Header>
        <h1>Bookstore</h1>
        <NavigationList>
          <NavigationItem>
            <Link to="/books">Books</Link>
          </NavigationItem>
        </NavigationList>
      </Header>
      <Main>
        <Routes>
        <Route path="/books" element={<BooksFeature />} />
        <Route path='/' element={<Navigate to="/books" />} />
        </Routes>
      </Main>
          </>
  );
}

export default App;
