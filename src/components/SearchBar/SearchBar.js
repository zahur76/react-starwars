import React from 'react';
import './SearchBar.css';
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
      <div>     
        <input onChange={this.handleTermChange} placeholder='search character'/>      
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </div>          
    );
  }  
}

export default SearchBar ;