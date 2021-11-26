import allCharactersData from './data.js';

const initialState = {
    allCharacters: [],    
    searchTerm: ''
};

// Sends the search term to the store.
const setSearchTerm = (term) => {
    return { 
      type: 'searchTerm/setSearchTerm', 
      payload: term 
    };
}

// Dispatched when the user presses the clear search button.
const clearSearchTerm = () => {
    return { 
    type: 'searchTerm/clearSearchTerm' 
    };
}

// Sends the allCharacters array to the store.
const loadData = () => {
    return { 
      type: 'allCharacters/loadData', 
      payload: allCharactersData
    };
}

const initialAllCharacters = [];
const allCharacterReducer = (allCharacters = initialAllCharacters, action) => {
  switch(action.type) {
    case 'allCharacters/loadData':
      return action.payload
    default:
      return allCharacters;
  }
}

const initialSearchTerm = '';
const searchTermReducer = (searchTerm = initialSearchTerm, action) => {
  switch(action.type) {
    case 'searchTerm/setSearchTerm':
      return action.payload;
    case 'searchTerm/clearSearchTerm':
      return '';
    default: 
      return searchTerm;
  }
}