import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const url = 'https://striveschool-api.herokuapp.com/api/books/';
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjYwMTVmNTA3ZjBkMTAwMTUzZDhjYzUiLCJpYXQiOjE3MTc1NzMxMDksImV4cCI6MTcxODc4MjcwOX0.3cI16-CxRBTWmHyqNW77xPog-2OZ3eDpJI8L6W8hSWQ';

function CommentArea({ asin }) {
  
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(url + asin + '/comments/', {
      headers: {
        Authorization: token
      },
      })
      .then((response) => response.json())
      .then((data) => setComments(data))
  }, [asin]);

  return (
    <>
      <CommentList comments={comments} />
      <AddComment token={token} elementId={asin} />
    </>
  );
}

export default CommentArea;