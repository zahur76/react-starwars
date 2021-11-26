import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import CharacterList from '../CharacterList/CharacterList';
import allCharactersData from '../data'


class App extends React.Component {
  constructor(props){
    super(props);       
    this.state = { allCharactersData: allCharactersData}     
    this.searchResults = this.searchResults.bind(this);        
  } 
  searchResults(term){
    console.log(term)
    let newList = []
    this.state.allCharactersData.map(element=>{
      if((element.name).includes(term)){
        newList.push(element)
      }
      
    })
    console.log(newList)    
    return this.setState({ allCharactersData: newList});  
  } 
  render(){
    return (
      <div>
        <Header />
        <SearchBar search={this.searchResults} />
        <CharacterList characters={this.state.allCharactersData}/>  
      </div>               
    );
  }  
}

export default App;