import './App.css';
import React from 'react'
import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import AuthorForm from './components/AuthorForm'
import FavoriteAuthors from './components/FavoriteAuthors';
import CreateAuthor from './components/CreateAuthor';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<FavoriteAuthors/>}/>
          <Route path='/create' element = {<CreateAuthor/>} />
          <Route path='/edit/:id' element = {<EditAuthor/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
