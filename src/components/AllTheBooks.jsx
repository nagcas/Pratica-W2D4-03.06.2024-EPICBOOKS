import '../style/AllTheBook.css';

import { Row } from 'react-bootstrap';
import SingleBook from './SingleBook';
import { useState } from 'react';
import SearchBook from './SearchBook';

function AllTheBooks({ books }) {

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e);
  } 
  
  return (
    <>
      <SearchBook search={search} handleSearch={handleSearch} />
      <Row>
        {books.filter((book) => book.title.toLowerCase().includes(search))
          .map((book) => <SingleBook key={book.asin} book={book} />)}
      </Row>
    </>
  );
}

export default AllTheBooks;