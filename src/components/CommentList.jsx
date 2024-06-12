// Importazione del file CSS per lo stile
import '../style/CommentList.css';

// Importazione dei componenti da React-Bootstrap e dei componenti locali
import { Container, ListGroup, Accordion, Badge } from 'react-bootstrap';
import { ThemeContext } from '../modules/Contexts';
import { useContext } from 'react';

import DeleteComment from './DeleteComment';
import UpdateComment from './UpdateComment';

// Definizione del componente CommentList
function CommentList({ comments, setAdd, add }) {

  // Uso del contesto per il tema
  const [themeCtx, setThemeCtx] = useContext(ThemeContext);

  // Render del componente
  return (
    <>
      <Container className='comment-list p-0' data-bs-theme={themeCtx}>
        <Accordion defaultActiveKey='1'>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>Comment List 
              <Badge bg="warning" pil className='m-2'>
                {comments.length}
              </Badge>
            </Accordion.Header>
            <Accordion.Body>
              <ListGroup>
                {/* Mappatura dei commenti per la visualizzazione */}
                {comments.length > 0 ? comments.map((comment) => (
                  <ListGroup.Item key={comment._id} className='d-flex justify-content-between align-items-center content-item'>
                    {comment.comment} - rate: {comment.rate}
                    <div className='d-flex gap-2'>
                      {/* Componenti per eliminare e aggiornare il commento */}
                      <DeleteComment comment={comment} setAdd={setAdd} add={add} />
                      <UpdateComment comment={comment} setAdd={setAdd} add={add} />
                    </div>
                  </ListGroup.Item>
                )) : <p className='text-center'>no comments present</p>}
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}

export default CommentList;
