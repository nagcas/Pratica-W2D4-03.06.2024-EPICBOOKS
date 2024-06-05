import { useState } from 'react';
import { Col, Card } from 'react-bootstrap';

import CommentArea from './CommentArea'

function SingleBook({ book }) {

  const [selected, setSelected] = useState(false);


  return (
    <Col>
      <Card className='card-item' style={{border: selected ? '2px solid red' : 'none' }} onClick={() => setSelected(!selected)}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body className='p-2'>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            Categoria: {book.category}
            Prezzo: € {book.price}
          </Card.Text>
        </Card.Body>
      </Card>
      {selected && <CommentArea asin={book.asin} />}
    </Col>
  );
}

export default SingleBook;