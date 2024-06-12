import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";

import '../style/NotFound.css';

function NotFound() {
  return (
    <Container>
      <div className='page-not-found'>
        <h1>404</h1>
        <h3>Error Page</h3>
        <p>Sorry, This page doesn't exit</p>
        <Link to='/' className='nav-link btn-back'>Back to Home</Link>
      </div>
    </Container>
  );
}

export default NotFound;