import '../style/CommentList.css';

import { Container, ListGroup, Accordion } from 'react-bootstrap';
import DeleteComment from './DeleteComment';
import UpdateComment from './UpdateComment';
import { useContext } from 'react';
import { ThemeContext } from '../modules/Contexts';

function CommentList({ comments, setAdd, add }) {

  const [themeCtx, setThemeCtx] = useContext(ThemeContext);

  return (
    <>
      <Container className='comment-list p-0' data-bs-theme={themeCtx}>
        <Accordion defaultActiveKey='1'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Comment List - {comments.length}</Accordion.Header>
          <Accordion.Body>
            <ListGroup>
              {comments.map((comment) => (
                <ListGroup.Item key={comment._id} className='d-flex justify-content-between align-items-center content-item'>
                  {comment.comment} - rate: {comment.rate}
                  <div className='d-flex gap-2'>
                    <DeleteComment comment={comment} setAdd={setAdd} add={add} />
                    <UpdateComment comment={comment} setAdd={setAdd} add={add} />
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </Container>
    </>
  );
}

export default CommentList;