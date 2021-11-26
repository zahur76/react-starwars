import React from 'react';
import './SearchBar.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SearchBar extends React.Component {  
  render(){
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">          
          <Form.Control type="email" placeholder="Search Character" />          
        </Form.Group>       
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>          
    );
  }  
}

export default SearchBar ;