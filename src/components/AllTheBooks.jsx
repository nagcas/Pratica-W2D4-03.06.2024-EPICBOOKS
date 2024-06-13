// Importazione del file CSS per lo stile
import '../style/AllTheBook.css';

// Importazione di componenti da React-Bootstrap e dei componenti locali
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

// Import SingleBook
import SingleBook from './SingleBook';

function AllTheBooks({ books, search, category }) {

  // Stato per tracciare il libro selezionato
  const [selected, setSelected] = useState(false);
  
  return (
    <Container className='content-books'>
      <Row>
        <Col md={12}>
          <h4 className='fs-5 text-secondary mb-3'>Books category: {category}</h4>
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

// Esportazione del componente AllTheBooks
export default AllTheBooks;
