import { useContext, useEffect, useState } from 'react';
import { Button, Alert, Modal, Form } from 'react-bootstrap';
import { ThemeContext } from '../modules/Contexts';

function UpdateComment({ comment, setAdd, add }) {
  const url = 'https://striveschool-api.herokuapp.com/api/comments/';
  const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjYwMTVmNTA3ZjBkMTAwMTUzZDhjYzUiLCJpYXQiOjE3MTc1NzMxMDksImV4cCI6MTcxODc4MjcwOX0.3cI16-CxRBTWmHyqNW77xPog-2OZ3eDpJI8L6W8hSWQ';

  const [isUpdate, setIsUpdate] = useState(false);
  const [show, setShow] = useState(false);
  const [formDataComment, setFormDataComment] = useState({ comment: comment.comment, rate: comment.rate });
  const [themeCtx, setThemeCtx] = useContext(ThemeContext);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleCommentChange = (e) => {
    setFormDataComment({
      ...formDataComment,
      comment: e.target.value,
    });
  };

  const handleRateChange = (e) => {
    setFormDataComment({
      ...formDataComment,
      rate: e.target.value,
    });
  };

  const handleUpdateComment = () => {
    fetch(url + comment._id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(formDataComment),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsUpdate(true);
        setAdd(!add);
        handleClose();
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Button variant='outline-warning' className='float-end' onClick={handleShow}><i className="bi bi-arrow-repeat"></i></Button>
      <Modal show={show} onHide={handleClose} animation={false} bg={themeCtx} data-bs-theme={themeCtx}>
        <Modal.Header closeButton>
          <Modal.Title className={themeCtx === 'dark' ? 'text-white' : 'text-dark'}>Modify comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='formComment'>
              <Form.Label className={themeCtx === 'dark' ? 'text-white' : 'text-dark'}>Comment</Form.Label>
              <Form.Control
                type='text'
                placeholder='Comment'
                name='comment'
                value={formDataComment.comment}
                onChange={handleCommentChange}
              />
            </Form.Group>
            <Form.Label className={themeCtx === 'dark' ? 'text-white' : 'text-dark'}>Rate</Form.Label>
            <Form.Select
              className='mb-3'
              aria-label='select-rate'
              name='rate'
              value={formDataComment.rate}
              onChange={handleRateChange}
            >
              <option>Select Rate</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleUpdateComment}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
			{isUpdate && <Alert variant='success' onClose={() => setIsUpdate(!isUpdate)} dismissible>Comment updated successfully</Alert>}
    </>
  );
}

export default UpdateComment;

