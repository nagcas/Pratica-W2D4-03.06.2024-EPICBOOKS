import { useState } from 'react';
import '../style/AddComment.css'

import { Container, Accordion, Form, Button, Alert } from 'react-bootstrap';

const url = 'https://striveschool-api.herokuapp.com/api/comments';

function AddComment({ token, elementId }) {

  const [message, setMessage] = useState(false);

  const [FormDataComment, setFormDataComment] = useState({
    comment: '',
    rate: 0,
    elementId: elementId,
  });

  let handleCommentChange = (e) => {
    setFormDataComment({
      ...FormDataComment,
      comment: e.target.value
    })
  }

  let handleRateChange = (e) => {
    setFormDataComment({
      ...FormDataComment,
      rate: e.target.value
    })
  }
 
  let sendComment = () => {
    console.log(FormDataComment)
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(FormDataComment),
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessage(true);
        setFormDataComment({comment: '', rate: 0, elementId: elementId});
      })
      .catch((error) => console.error(error))
  }

  return (
    <Container className='comment-add p-0'>
      <Accordion defaultActiveKey='1'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Add Comment</Accordion.Header>
          <Accordion.Body>
          <Form>
            <Form.Group className='mb-3' controlId='formComment'>
              <Form.Label>Comment</Form.Label>
              <Form.Control 
                type='text' 
                placeholder='Comment' 
                name='comment' 
                onChange={handleCommentChange}
              />
            </Form.Group>
            <Form.Select 
              className='mb-3' 
              aria-label='select-rate' 
              name='rate' 
              onChange={handleRateChange}
            >
              <option>Select Rate</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </Form.Select>
            <Button variant='primary' onClick={sendComment}>Add Comment</Button>
          </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    {message && <Alert variant='success' onClose={() => setMessage(false)} dismissible>Comment sent successfully</Alert>}
    </Container>
  );
}

export default AddComment;