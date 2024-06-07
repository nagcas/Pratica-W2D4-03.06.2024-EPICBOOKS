import { useContext } from 'react';

import { Alert } from 'react-bootstrap';

import { ThemeContext } from '../modules/Contexts';


function Welcome() {
  
  const [themeCtx, setThemeCtx] = useContext(ThemeContext);
  
  return (
    <>
      <Alert variant={themeCtx === 'dark' ? 'dark' : 'success'} className='mt-4 text-center'>
        <h1>Benvenuti su EPIC - Books</h1>
      </Alert>
    </>
  );
}

export default Welcome;