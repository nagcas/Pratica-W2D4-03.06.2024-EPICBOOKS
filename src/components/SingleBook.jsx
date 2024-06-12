// Importazione dei hook di React e dei componenti necessari da React-Bootstrap
import { useContext, useState } from 'react';
import { Col, Card, Button } from 'react-bootstrap';

// Importazione del componente CommentArea e del contesto per il tema
import CommentArea from './CommentArea';
import { ThemeContext } from '../modules/Contexts';

import { useNavigate } from 'react-router-dom';

// Definizione del componente SingleBook
function SingleBook({ book, selected, setSelected }) {

  // Definizione dello stato locale per il tema e del contesto per il tema
  const [themeCtx, setThemeCtx] = useContext(ThemeContext);

  const navigate = useNavigate();

  // Render del componente
  return (
    <Col>
      {/* Carta rappresentante il singolo libro */}
      <Card
        bg={themeCtx} 
        data-bs-theme={themeCtx} 
        className='card-item' 
        // Applica un bordo rosso se il libro è selezionato
        style={{border: selected === book.asin ? '2px solid red' : 'none' }} 
        onClick={() => setSelected(book.asin)} // Funzione per selezionare il libro
      >
        <Card.Img variant='top' src={book.img} />
        <Card.Body className='p-2'>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>Category: {book.category}</Card.Text>
          <Card.Text>Price: € {book.price}</Card.Text>
        </Card.Body>
        <Button className='btn-success w-75 m-auto mb-4' onClick={() => navigate(`/book-detail/${book.asin}/${book.category}`)}>Book Detail</Button>
      </Card>
      {/* Visualizza l'area commenti solo se il libro è selezionato */}
      {/* {selected && <CommentArea asin={book.asin} />} */}
    </Col>
  );
}

export default SingleBook;
