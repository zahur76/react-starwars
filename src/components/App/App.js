import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import CharacterList from '../CharacterList/CharacterList';
import allCharactersData from '../data'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { newCharactersData: []}             
    this.state = { allCharactersData: allCharactersData}     
    this.searchResults = this.searchResults.bind(this);        
  } 
  searchResults(term){    
    let newList = []
    this.state.allCharactersData.map(element=>{
      if(((element.name).toLowerCase()).includes(term.toLowerCase())){
        newList.push(element)
      }      
    })       
    this.setState({ newCharactersData: newList});        
  } 
  render(){
    return (
      <div className="content">
        <Header />
        <SearchBar search={this.searchResults} />
        <CharacterList characters={this.state.newCharactersData}/>  
      </div>               
    );
  }  
}

export default App;