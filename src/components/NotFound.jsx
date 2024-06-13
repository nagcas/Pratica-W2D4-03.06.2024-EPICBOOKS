// Importazione del file CSS per lo stile
import '../style/NotFound.css';

import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";


function NotFound() {
  return (
    <>
      <Container className='page-not-found'>
        <div className='content'>
          <h1>4🤯4</h1>
          <h4>Opps! Page not found</h4>
          <p>Sorry, the page you're looking for doesn't exist.</p>
          <Link to='/' className='nav-link btn-back'>Back to Home</Link>
        </div>
      </Container>
    </>
  );
}

// Esportazione del componente NotFound
export default NotFound;