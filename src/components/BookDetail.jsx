// Importazione del file CSS per lo stile
import '../style/BookDetail.css';

import { Container, Row, Col, Image } from "react-bootstrap";

import { Link, useParams } from 'react-router-dom';

import CommentArea from './CommentArea';

// Importa il file JSON contenente libri fantasy
import fantasy from '../books/fantasy.json'; 
// Importa il file JSON contenente libri di storia
import history from '../books/history.json'; 
// Importa il file JSON contenente libri horror
import horror from '../books/horror.json'; 
// Importa il file JSON contenente libri romantici
import romance from '../books/romance.json'; 
// Importa il file JSON contenente libri di fantascienza
import scifi from '../books/scifi.json'; 


function BookDetail() {

  const { asin, category } = useParams();

  const categories = {
    fantasy: fantasy,
    history: history,
    horror: horror,
    romance: romance,
    scifi: scifi
  };

  // console.log(categories[category]);

  const books = categories[category] || [];
  const book = books.find((b) => b.asin.includes(asin));

  return (      
    <Container key={book.asin}>
      <Row>
        <Col className="d-flex content-detail">
          <Image src={`${book.img}`} />
          <div>
            <h3>Title: <span className='title'>{book.title}</span></h3>
            <p>Category: <span className='category'>{book.category}</span></p>
            <p>Price: <span className='price'>€ {book.price}</span></p>
            <Link to={category === 'fantasy' ? '/' : `/${category}`} className='nav-link btn-back'>Back to Books</Link>
          </div>
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

export default BookDetail;