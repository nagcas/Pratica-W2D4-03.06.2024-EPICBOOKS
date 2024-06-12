// Importazione del file CSS per lo stile
import '../style/AllTheBook.css';

// Importazione di componenti da React-Bootstrap e dei componenti locali
import { Container, Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';
import { useState } from 'react';
// Importazione del componente SearchBook (attualmente commentato)
// import SearchBook from './SearchBook';


function AllTheBooks({ books, search }) {

  // Stato per tracciare il libro selezionato
  const [selected, setSelected] = useState(false);

  // Stato e gestore per la ricerca (attualmente commentati)
  // const [search, setSearch] = useState('');
  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  // }
  
  return (
    <Container className='content-books'>
      <Row>
        <Col md={9}>
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
        <Col md={3}>
          {/* Area dei commenti per il libro selezionato */}
          <CommentArea asin={selected} />
        </Col>
      </Row>
    </Container>
  );
}

export default AllTheBooks;
