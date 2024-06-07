// Importazione dei hook di React e dei componenti necessari da React-Bootstrap
import { useContext, useState } from 'react';
import { Col, Card } from 'react-bootstrap';

// Importazione del componente CommentArea e del contesto per il tema
import CommentArea from './CommentArea';
import { ThemeContext } from '../modules/Contexts';

// Definizione del componente SingleBook
function SingleBook({ book, selected, setSelected }) {

  // Definizione dello stato locale per il tema e del contesto per il tema
  const [themeCtx, setThemeCtx] = useContext(ThemeContext);

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
          <Card.Text>Categoria: {book.category}</Card.Text>
          <Card.Text>Prezzo: € {book.price}</Card.Text>
        </Card.Body>
      </Card>
      {/* Visualizza l'area commenti solo se il libro è selezionato */}
      {/* {selected && <CommentArea asin={book.asin} />} */}
    </Col>
  );
}

export default SingleBook;
