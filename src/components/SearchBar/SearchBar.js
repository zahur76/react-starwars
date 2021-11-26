import React from 'react';
import './SearchBar.css';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = { term: '' }    
    this.handleTermChange = this.handleTermChange.bind(this);        
  }
  async handleTermChange(event){
    this.setState({ term: await event.target.value})
    console.log(this.state.term)
    this.props.search(this.state.term);        
  }
  render(){
    return (
      <Col className="text-center">     
        <input className="search-bar w-50 mb-3 mt-3" onChange={this.handleTermChange} placeholder='search character'/>
      </Col>          
    );
  }  
}

export default SearchBar ;