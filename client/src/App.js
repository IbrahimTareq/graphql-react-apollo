import React from 'react';
import BookList from './components/BookList';
import './App.css';
import ApolloClient from 'apollo-boost';

function App() {
  return (
    <div className="App">
      <h1>Ninja's Reading List</h1>
      <BookList />
    </div>
  );
}

export default App;
