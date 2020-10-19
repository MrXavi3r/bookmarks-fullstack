import React from 'react';
import '../App.css';
import Header from './Header'
import BookmarkList from './BookmarkList';

function App() {
  return (
    <div className="App container-lg">
      <Header />
      <BookmarkList />
    </div>
  );
}

export default App;
