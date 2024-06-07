// Importazione del file CSS per lo stile
import '../style/MyNav.css';

// Importazione dei componenti necessari da React-Bootstrap e del componente locale
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import SearchBook from './SearchBook';
import { useContext } from 'react';

// Importazione del contesto per il tema
import { ThemeContext } from '../modules/Contexts';

// Definizione del componente MyNav
function MyNav({ search, handleSearch }) {

  // Uso del contesto per il tema
  const [themeCtx, setThemeCtx] = useContext(ThemeContext);

  // Render del componente
  return (
    <Navbar expand='lg' className='bg-body-tertiary shadow fixed-top' bg={themeCtx} data-bs-theme={themeCtx}>
      <Container>
        <Navbar.Brand href='#home'>Epic Books</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#browse'>Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* Componente per la ricerca dei libri */}
        <SearchBook search={search} handleSearch={handleSearch} />
        {/* Bottone per cambiare il tema */}
        <Button variant='dark' onClick={() => {
          // Cambio del tema al click del bottone
          themeCtx === 'light' ? setThemeCtx('dark') : setThemeCtx('light');
        }}>
          {/* Icona del tema corrente */}
          {themeCtx === 'dark' ? <i className='bi bi-moon-stars-fill'></i> : <i className='bi bi-sun'></i>} 
        </Button>
      </Container>
    </Navbar>
  );
}

export default MyNav;
