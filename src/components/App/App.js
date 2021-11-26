import React from 'react';
import './App.css';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';

class App extends React.Component {  
  render(){
    return (
      <div>
        <Header />
        <SearchBar />  
      </div>               
    );
  }  
}

export default App;