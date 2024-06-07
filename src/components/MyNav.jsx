import '../style/MyNav.css';

import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import SearchBook from './SearchBook';
import { useContext } from 'react';

import { ThemeContext } from '../modules/Contexts';

function MyNav({ search, handleSearch }) {

  const [themeCtx, setThemeCtx] = useContext(ThemeContext);
  

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
        <SearchBook search={search} handleSearch={handleSearch} />
        <Button variant='dark' onClick={() => {
          themeCtx === 'ligth' ? setThemeCtx('dark') : setThemeCtx('ligth');
        }}>
          {themeCtx === 'dark' ? <i className='bi bi-moon-stars-fill'></i> : <i className='bi bi-sun'></i>} 
        </Button>
      </Container>
    </Navbar>
  )
}

export default MyNav;