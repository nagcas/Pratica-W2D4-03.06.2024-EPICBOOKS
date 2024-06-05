import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Button } from 'react-bootstrap';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';

import fantasy from './books/fantasy.json';
import history from './books/history.json';
import horror from './books/horror.json';
import romance from './books/romance.json';
import scifi from './books/scifi.json';

import AllTheBooks from './components/AllTheBooks';
import { useState } from 'react';

function App() {
  const [categoria, setCategoria] = useState('fantasy');

  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <Container className='content-button'>
          <Button variant="success" onClick={() => setCategoria('fantasy')}>Fantasy</Button>
          <Button variant="success" onClick={() => setCategoria('history')}>History</Button>
          <Button variant="success" onClick={() => setCategoria('horror')}>Horror</Button>
          <Button variant="success" onClick={() => setCategoria('romance')}>Romance</Button>
          <Button variant="success" onClick={() => setCategoria('scifi')}>Scifi</Button>  
        </Container>
        {categoria === 'fantasy' && <AllTheBooks books={fantasy} />}
        {categoria === 'history' && <AllTheBooks books={history} />}
        {categoria === 'horror' && <AllTheBooks books={horror} />}
        {categoria === 'romance' && <AllTheBooks books={romance} />}
        {categoria === 'scifi' && <AllTheBooks books={scifi} />}
        <MyFooter />
      </Container>  
    </>
  )
}

export default App;
