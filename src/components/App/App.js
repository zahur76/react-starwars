import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import CharacterList from '../CharacterList/CharacterList';

class App extends React.Component {  
  render(){
    return (
      <div>
        <Header />
        <SearchBar />
        <CharacterList />  
      </div>               
    );
  }  
}

export default App;