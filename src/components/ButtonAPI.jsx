

<Container>
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