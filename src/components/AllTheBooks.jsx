// Importazione del file CSS per lo stile
import '../style/AllTheBook.css';

// Importazione di componenti da React-Bootstrap e dei componenti locali
import { Container, Row, Col } from 'react-bootstrap';

//import CommentArea from './CommentArea';
import { useState } from 'react';

import SingleBook from './SingleBook';

function AllTheBooks({ books, search }) {

  // Stato per tracciare il libro selezionato
  const [selected, setSelected] = useState(false);
  
  return (
    <Container className='content-books'>
      <Row>
        <Col md={12}>
          {/* Componente di ricerca (attualmente commentato) */}
          {/* <SearchBook search={search} handleSearch={handleSearch} /> */}
          <Row>
            {/* Filtro e mappatura dei libri in base al titolo e alla ricerca */}
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
        {/* <Col md={3}>
          Area dei commenti per il libro selezionato
          <CommentArea asin={selected} />
        </Col> */}
      </Row>
    </Container>
  );
}

export default AllTheBooks;
