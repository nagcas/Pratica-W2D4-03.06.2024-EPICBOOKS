// Importazione del file CSS per lo stile
import '../style/CommentList.css';

// Importazione dei componenti da React-Bootstrap e dei componenti locali
import { Container, ListGroup, Accordion, Badge } from 'react-bootstrap';
import { ThemeContext } from '../modules/Contexts';
import { useContext } from 'react';

import DeleteComment from './DeleteComment';
import UpdateComment from './UpdateComment';
import { Star, StarFill } from 'react-bootstrap-icons';

// Definizione del componente CommentList
function CommentList({ comments, setAdd, add }) {

  // Uso del contesto per il tema
  const [themeCtx, setThemeCtx] = useContext(ThemeContext);

  // Render del componente
  return (
    <Container className='comment-list p-0' data-bs-theme={themeCtx}>
      <Accordion defaultActiveKey='1'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Comment List 
            <Badge bg='warning' className='m-2'>
              {comments.length}
            </Badge>
          </Accordion.Header>
          <Accordion.Body>
              {/* Mappatura dei commenti per la visualizzazione */}
              {comments.length > 0 ? comments.map((comment) => (
            <ListGroup key={comment._id}>
                <ListGroup.Item key={comment._id} className='d-flex justify-content-between align-items-center content-item'>
                  <div>{Array.from({length: comment.rate}).map(() => <StarFill color='#f0f329' />)}</div>
                  <div>{comment.comment}</div>
                  <div className='d-flex justify-content-end gap-2'>
                    {/* Componenti per eliminare e aggiornare il commento */}
                    <DeleteComment comment={comment} setAdd={setAdd} add={add} />
                    <UpdateComment comment={comment} setAdd={setAdd} add={add} />
                  </div>
                </ListGroup.Item>
            </ListGroup>
              )) : <div className='text-center text-danger fs-5'>no comments present</div>}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container> 
  );
}

// Esportazione del componente CommentList
export default CommentList;
