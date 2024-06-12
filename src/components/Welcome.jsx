// Importa hook di React
import { useContext } from 'react'; 
// Importa il componente Alert da React Bootstrap
import { Container, Alert } from 'react-bootstrap'; 
// Importa il contesto del tema
import { ThemeContext } from '../modules/Contexts'; 

function Welcome() {
  // Utilizza il contesto del tema per cambiare lo sfondo dark o ligth quando richiesto
  const [themeCtx, setThemeCtx] = useContext(ThemeContext); 
  
  return (
    <Container>
      {/* Messaggio di benvenuto con un Alert che cambia colore in base al tema */}
      <Alert variant={themeCtx === 'dark' ? 'dark' : 'success'} className='mt-4 text-center'>
        <h1>Benvenuti su EPIC - Books</h1>
      </Alert>
    </Container>
  );
}

export default Welcome;
