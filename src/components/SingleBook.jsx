import { useContext, useState } from 'react';
import { Col, Card } from 'react-bootstrap';

import CommentArea from './CommentArea'
import { ThemeContext } from '../modules/Contexts';

function SingleBook({ book, selected, setSelected }) {

  // const [selected, setSelected] = useState(false);
  const [themeCtx, setThemeCtx] = useContext(ThemeContext);

  return (
    <Col>
      <Card
        bg={themeCtx} 
        data-bs-theme={themeCtx} 
        className='card-item' 
        style={{border: selected === book.asin ? '2px solid red' : 'none' }} 
        onClick={() => setSelected(book.asin)}
      >
        <Card.Img variant='top' src={book.img} />
        <Card.Body className='p-2'>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>Categoria: {book.category}</Card.Text>
          <Card.Text>Prezzo: € {book.price}</Card.Text>
        </Card.Body>
      </Card>
      {/* {selected && <CommentArea asin={book.asin} />} */}
    </Col>
  );
}

export default SingleBook;