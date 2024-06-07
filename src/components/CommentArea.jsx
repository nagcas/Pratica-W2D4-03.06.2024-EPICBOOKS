import { useEffect, useState } from 'react';

import CommentList from './CommentList';
import AddComment from './AddComment';

import { Spinner, Alert} from 'react-bootstrap';

import { ThemeContext } from '../modules/Contexts';


function CommentArea({ asin }) {
  
  const url = 'https://striveschool-api.herokuapp.com/api/books/';
  const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjYwMTVmNTA3ZjBkMTAwMTUzZDhjYzUiLCJpYXQiOjE3MTc1NzMxMDksImV4cCI6MTcxODc4MjcwOX0.3cI16-CxRBTWmHyqNW77xPog-2OZ3eDpJI8L6W8hSWQ';
  
  const [themeCtx, setThemeCtx] = useState(ThemeContext);
  
  const [comments, setComments] = useState([]);
  const [isEnableSpinner, setIsEnableSpinner] = useState(false);
  const [isError, setIsError] = useState(false);

  const [add, setAdd] = useState(false);

  useEffect(() => {
    setIsEnableSpinner(true);
    fetch(url + asin + '/comments/', {
      headers: {
        Authorization: token,
      },
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setComments(data);
        setIsEnableSpinner(false);
      })
      .catch((error) => {
        console.error('Errore nel caricamento...', error);
        setIsError(true);
        setIsEnableSpinner(false);
      })
  }, [asin, add]);

  return (
    <>
      {isEnableSpinner && <div className='text-center'><Spinner animation='grow' /></div>}
      {isError && <div className='text-center'><Alert variant='danger'>Errore nel caricamento...</Alert></div>}
      <CommentList comments={comments} setAdd={setAdd} add={add} />
      <AddComment token={token} elementId={asin} setAdd={setAdd} add={add} />
    </>
  );
}

export default CommentArea;