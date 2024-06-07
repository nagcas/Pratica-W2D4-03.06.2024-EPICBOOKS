import { Col, Form } from 'react-bootstrap';

function SearchBook({ search, handleSearch }) {
  return (
    <Col>
      <Form.Group className='m-3'>
        <Form.Control 
          type='search'
          placeholder='Search book...'
          value={search}
          onChange={handleSearch}
        />
      </Form.Group> 
    </Col>
  );
}

export default SearchBook;