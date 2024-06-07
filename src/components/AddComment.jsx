import { useContext, useState } from 'react';
import '../style/AddComment.css'

import { Container, Accordion, Form, Button, Alert } from 'react-bootstrap';
import { ThemeContext } from '../modules/Contexts';


function AddComment({ token, elementId, setAdd, add }) {
  
  const url = 'https://striveschool-api.herokuapp.com/api/comments';
  
  const [themeCtx, setThemeCtx] = useContext(ThemeContext);
  const [message, setMessage] = useState(false);
  const [error, setError] = useState('');


  const [FormDataComment, setFormDataComment] = useState({
    comment: '',
    rate: 0,
    elementId: elementId
  });

  let handleCommentChange = (e) => {
    setFormDataComment({
      ...FormDataComment,
      comment: e.target.value,
      elementId: elementId
    })
  }

  let handleRateChange = (e) => {
    setFormDataComment({
      ...FormDataComment,
      rate: e.target.value,
      elementId: elementId
    })
  }
 
  let sendComment = () => {
    console.log(FormDataComment);

    if (FormDataComment.comment.trim() === '') {
      setError('Comment is required.');
      return;
    }

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
        setAdd(!add);
      })
      .catch((error) => console.error(error))
  }

  return (
    <Container className='comment-add p-0' data-bs-theme={themeCtx}>
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
                value=''
                onChange={handleCommentChange}
              />
            </Form.Group>
            <Form.Select 
              className='mb-3' 
              aria-label='select-rate' 
              name='rate'
              value=''
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
          {error && <Alert className='mt-4' variant='danger' onClose={() => setError('')} dismissible>{error}</Alert>}
          {message && <Alert className='mt-4' variant='success' onClose={() => setMessage(false)} dismissible>Comment sent successfully!</Alert>}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default AddComment;