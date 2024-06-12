// Importazione del file CSS per lo stile
import '../style/BookDetail.css';

// Importazione dei componenti da react-bootstrap
import { Container, Row, Col, Image } from "react-bootstrap";

// Importazione dei componenti Link e useParams da react-router-dom
import { Link, useParams } from 'react-router-dom';

// Importazione del componente CommentArea
import CommentArea from './CommentArea';

// Importazione dei file JSON contenenti i libri suddivisi per categoria
import fantasy from '../books/fantasy.json'; 
import history from '../books/history.json'; 
import horror from '../books/horror.json'; 
import romance from '../books/romance.json'; 
import scifi from '../books/scifi.json'; 

// Definizione del componente BookDetail
function BookDetail() {

  // Uso del hook useParams per ottenere i parametri asin e category dall'URL
  const { asin, category } = useParams();

  // Mappa delle categorie con i rispettivi libri
  const categories = {
    fantasy: fantasy,
    history: history,
    horror: horror,
    romance: romance,
    scifi: scifi
  };

  // Estrazione dei libri della categoria corrente, oppure un array vuoto se la categoria non esiste
  const books = categories[category] || [];
  // Ricerca del libro specifico in base al parametro asin
  const book = books.find((b) => b.asin.includes(asin));

  // Se il libro non viene trovato, mostra un messaggio di errore
  if (!book) {
    return (
      <Container>
        <Row>
          <Col className='text-center'>
            <h3>Book not found</h3>
            <Link to={category === 'fantasy' ? '/' : `/${category}`} className='nav-link btn-back mb-4'>Back to Books</Link>
          </Col>
        </Row>
      </Container>
    );
  }

  // Render del componente
  return (      
    <Container>
      <Row>
        <Col className="d-flex content-detail">
          {/* Visualizzazione dell'immagine del libro */}
          <Image src={book.img} alt={book.title} />
          {/* Visualizzazione del titolo del libro */}
          <Row>
            <Col>
              <h3>Title: <span className='title-book'>{book.title}</span></h3>
              {/* Visualizzazione della categoria del libro */}
              <p>Category: <span className='category-book'>{book.category}</span></p>
              {/* Visualizzazione del prezzo del libro */}
              <p>Price: <span className='price-book'>€ {book.price}</span></p>
              {/* Link per tornare alla lista dei libri della categoria */}
              <Link to={category === 'fantasy' ? '/' : `/${category}`} className='nav-link btn-back'>Back to Books</Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className='mt-4'>
          {/* Area dei commenti per il libro selezionato */}
          <CommentArea asin={asin} />
        </Col>
      </Row>
    </Container>    
  );
}

// Esportazione del componente BookDetail
export default BookDetail;

