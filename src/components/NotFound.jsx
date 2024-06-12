// Importazione del file CSS per lo stile
import '../style/NotFound.css';

import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";


function NotFound() {
  return (
    <>
      <Container className='page-not-found'>
        <h1>404</h1>
        <h3>Error Page</h3>
        <p>Sorry, This page doesn't exit</p>
        <Link to='/' className='nav-link btn-back'>Back to Home</Link>
      </Container>
    </>
  );
}

// Esportazione del componente NotFound
export default NotFound;