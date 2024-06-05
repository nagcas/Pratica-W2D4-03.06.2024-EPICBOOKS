import '../style/CommentList.css';

import { Container, ListGroup, Accordion } from 'react-bootstrap';
import DeleteComment from './DeleteComment';

function CommentList({ comments }) {

  return (
    <Container className='comment-list p-0'>
      <Accordion defaultActiveKey='1'>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>Comment List</Accordion.Header>
        <Accordion.Body>
          <ListGroup>
            {comments.map((comment) => (
              <ListGroup.Item key={comment._id} className='d-flex justify-content-between align-items-center content-item'>
                {comment.comment} - rate: {comment.rate}
                <DeleteComment comment={comment} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
  );
}

export default CommentList;