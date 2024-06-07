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

import { ThemeContext } from './modules/Contexts';

function App() {
  const [categoria, setCategoria] = useState('fantasy');

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const [theme, setTheme] = useState('ligth');

  return (
    <>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <MyNav search={search} handleSearch={handleSearch} />
        <Container>
          <Welcome />
          <Container className='content-button'>
            <Button variant={theme === 'dark' ? 'dark' : 'success'} onClick={() => setCategoria('fantasy')}>Fantasy</Button>
            <Button variant={theme === 'dark' ? 'dark' : 'success'} onClick={() => setCategoria('history')}>History</Button>
            <Button variant={theme === 'dark' ? 'dark' : 'success'} onClick={() => setCategoria('horror')}>Horror</Button>
            <Button variant={theme === 'dark' ? 'dark' : 'success'} onClick={() => setCategoria('romance')}>Romance</Button>
            <Button variant={theme === 'dark' ? 'dark' : 'success'} onClick={() => setCategoria('scifi')}>Scifi</Button>  
          </Container>
          {categoria === 'fantasy' && <AllTheBooks books={fantasy} search={search} />}
          {categoria === 'history' && <AllTheBooks books={history} search={search} />}
          {categoria === 'horror' && <AllTheBooks books={horror} search={search} />}
          {categoria === 'romance' && <AllTheBooks books={romance} search={search} />}
          {categoria === 'scifi' && <AllTheBooks books={scifi} search={search} />}
        </Container>
        <MyFooter />
      </ThemeContext.Provider>
    </>
  )
}

export default App;
