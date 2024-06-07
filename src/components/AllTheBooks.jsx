import '../style/AllTheBook.css';

import { Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';
import { useState } from 'react';
// import SearchBook from './SearchBook';

function AllTheBooks({ books, search }) {

  const [selected, setSelected] = useState(false);

  // const [search, setSearch] = useState('');

  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  // }
  
  return (
    <>
      <Row>
        <Col md={9}>
          {/* <SearchBook search={search} handleSearch={handleSearch} /> */}
          <Row>
            {books.filter((book) => book.title.toLowerCase().includes(search))
              .map((book) => 
              <SingleBook 
                key={book.asin} 
                book={book} 
                selected={selected} 
                setSelected={setSelected} 
              />)
            }
          </Row>
        </Col>
        <Col md={3}>
          <CommentArea asin={selected} />
        </Col>
      </Row>
    </>
  );
}

export default AllTheBooks;