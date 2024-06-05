import { Form } from 'react-bootstrap';

function SearchBook({ search, handleSearch }) {
  return (
    <Form.Control
      className='mb-4'
      placeholder='Search book'
      type='text'
      name='search'
      value={search}
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}

export default SearchBook;