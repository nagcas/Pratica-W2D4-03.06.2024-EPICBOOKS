// Importa il foglio di stile principale dell'applicazione
import './App.css';
// Importa lo stile CSS di Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; 

// Importa i componenti Container e Button da React Bootstrap
import { Container, Button } from 'react-bootstrap'; 
// Importa il componente di navigazione personalizzato
import MyNav from './components/MyNav'; 
// Importa il componente del piè di pagina personalizzato
import MyFooter from './components/MyFooter'; 
// Importa il componente di benvenuto personalizzato
import Welcome from './components/Welcome'; 

// Importa il file JSON contenente libri fantasy
import fantasy from './books/fantasy.json'; 
// Importa il file JSON contenente libri di storia
import history from './books/history.json'; 
// Importa il file JSON contenente libri horror
import horror from './books/horror.json'; 
// Importa il file JSON contenente libri romantici
import romance from './books/romance.json'; 
// Importa il file JSON contenente libri di fantascienza
import scifi from './books/scifi.json'; 

// Importa il componente che mostra tutti i libri
import AllTheBooks from './components/AllTheBooks'; 
// Importa il hook useState da React
import { useState } from 'react'; 

// Importa il contesto del tema dall'applicazione
import { ThemeContext } from './modules/Contexts'; 

function App() {
  // Definisce lo stato della categoria selezionata
  const [categoria, setCategoria] = useState('fantasy'); 
  // Definisce lo stato della ricerca
  const [search, setSearch] = useState(''); 
  // Definisce la funzione per gestire la ricerca
  const handleSearch = (e) => { 
    setSearch(e.target.value);
  }
  // Definisce lo stato del tema
  const [theme, setTheme] = useState('ligth'); 

  return (
    <>
      {/* Fornisce il contesto del tema all'applicazione */}
      <ThemeContext.Provider value={[theme, setTheme]}> 
        {/* Mostra la barra di navigazione personalizzata */}
        <MyNav search={search} handleSearch={handleSearch} /> 
        <Container>
          {/* Mostra il componente di benvenuto */}
          <Welcome /> 
          {/* Contenitore per i pulsanti di categoria */}
          <Container className='content-button'> 
            {/* Pulsante per la categoria Fantasy */}
            <Button variant={theme === 'dark' ? 'dark' : 'success'} onClick={() => setCategoria('fantasy')}>Fantasy</Button> 
            {/* Pulsante per la categoria Storia */}
            <Button variant={theme === 'dark' ? 'dark' : 'success'} onClick={() => setCategoria('history')}>History</Button>
            {/* Pulsante per la categoria Horror */} 
            <Button variant={theme === 'dark' ? 'dark' : 'success'} onClick={() => setCategoria('horror')}>Horror</Button> 
            {/* Pulsante per la categoria Romance */}
            <Button variant={theme === 'dark' ? 'dark' : 'success'} onClick={() => setCategoria('romance')}>Romance</Button> 
            {/* Pulsante per la categoria Fantascienza */}  
            <Button variant={theme === 'dark' ? 'dark' : 'success'} onClick={() => setCategoria('scifi')}>Scifi</Button> 
          </Container>
          {/* Mostri il componente AllTheBooks basato sulla categoria selezionata e sulla ricerca */}
          {categoria === 'fantasy' && <AllTheBooks books={fantasy} search={search} />}
          {categoria === 'history' && <AllTheBooks books={history} search={search} />}
          {categoria === 'horror' && <AllTheBooks books={horror} search={search} />}
          {categoria === 'romance' && <AllTheBooks books={romance} search={search} />}
          {categoria === 'scifi' && <AllTheBooks books={scifi} search={search} />}
        </Container>
        {/* Mostra il footer di pagina */}
        <MyFooter /> 
      </ThemeContext.Provider>
    </>
  )
}

// Esporta il componente App come predefinito
export default App; 

