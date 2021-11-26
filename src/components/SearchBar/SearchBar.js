import React from 'react';
import './SearchBar.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import data from '../data'

class SearchBar extends React.Component {  
  render(){
    return (
      <div>     
        <input placeholder='search character'/>      
        <Button onClick={this.myCharacters} variant="primary" type="submit">
          Submit
        </Button>
        </div>          
    );
  }  
}

export default SearchBar ;