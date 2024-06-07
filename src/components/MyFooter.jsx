// Importazione dei hook di React e dei componenti necessari da React-Bootstrap
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import '../style/MyFooter.css'; // Importazione del file CSS per lo stile
import { ThemeContext } from '../modules/Contexts'; // Importazione del contesto per il tema

// Definizione del componente MyFooter
function MyFooter() {

  // Uso del contesto per il tema
  const [themeCtx, setThemeCtx] = useContext(ThemeContext);

  // Render del componente
  return (
    <footer className={'bg-' + themeCtx + ' py-3 container-fluid'}>
      <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
        <li className='nav-item'>
          <a href='#home' className={themeCtx === 'dark' ? 'text-white text-center nav-link px-2 item-link' : 'text-dark text-center nav-link px-2 item-link'}>
            Home
          </a>
        </li>
        <li className='nav-item'>
          <a href='#about' className={themeCtx === 'dark' ? 'text-white text-center nav-link px-2 item-link' : 'text-dark text-center nav-link px-2 item-link'}>
            About
          </a>
        </li>
        <li className='nav-item'>
          <a href='#browse' className={themeCtx === 'dark' ? 'text-white text-center nav-link px-2 item-link' : 'text-dark text-center nav-link px-2 item-link'}>
            Browse
          </a>
        </li>
      </ul>
      <p className={themeCtx === 'dark' ? 'text-white text-center' : 'text-dark text-center'}>© 2024 Epic-Books, Inc</p>
    </footer>
  );
}

export default MyFooter;
