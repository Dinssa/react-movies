import logo from '../../logo.svg';
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // add Routes and Route

import LoginPage from '../Auth/LoginPage';
import MovieDetailPage from '../Movie/MovieDetailPage';
import MoviesListPage from '../Movie/MoviesListPage';
import ActorsListPage from '../Actor/ActorsListPage';
import ActorDetailPage from '../Actor/ActorDetailPage';
import Nav from '../../components/global/Nav';

import { movies } from "../../data.js";

function App() {
  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    setUser({email, password})
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {user ?
      <>
        <Nav/>
        <Routes>
          <Route path="/" element={<MoviesListPage movies={movies}/>} />
          <Route path="/movies/:movieTitle" element={<MovieDetailPage movies={movies} />} />
          <Route path="/actors" element={<ActorsListPage movies={movies}/>} />    
          <Route path="/actor/:name" element={<ActorDetailPage movies={movies}/>} />    
        </Routes>      
      </>
        :
        <LoginPage setUser={setUser}/>
      }
    </div>
  );
}

export default App;
