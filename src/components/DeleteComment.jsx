import { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';


function DeleteComment({ comment, setAdd, add }) {
  
  const url = 'https://striveschool-api.herokuapp.com/api/comments/';
  const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjYwMTVmNTA3ZjBkMTAwMTUzZDhjYzUiLCJpYXQiOjE3MTc1NzMxMDksImV4cCI6MTcxODc4MjcwOX0.3cI16-CxRBTWmHyqNW77xPog-2OZ3eDpJI8L6W8hSWQ';

  const [message, setMessage] = useState(false);

  const removeComment = (comment) => {

    fetch(url + comment._id, {
      method: 'DELETE',
      headers: {
        Authorization: token
      }
    }).then(response => response.json())
      .then(data => {
        console.log(data);
        setMessage(true);
        setAdd(!add);
      })
      .catch(error => console.error(error))
  }

  return (
    <>
      <Button variant='outline-danger' className='float-end' onClick={() => removeComment(comment)}><i className="bi bi-trash3"></i></Button>
      {message && <Alert variant='success' onClose={() => setMessage(!message)} dismissible>Comment delete successfully</Alert>}
    </>
  )
}

export default DeleteComment;