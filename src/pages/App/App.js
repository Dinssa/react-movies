import logo from '../../logo.svg';
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // add Routes and Route

import LoginPage from '../Auth/LoginPage';
import MovieDetailPage from '../Movie/MovieDetailPage';
import MoviesListPage from '../Movie/MoviesListPage';
import ActorsListPage from '../Actor/ActorsListPage';

function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {user ?
      <>
        <Routes>
          <Route path="/movies" element={<MoviesListPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailPage />} />
          <Route path="/actors" element={<ActorsListPage />} />    
        </Routes>      
      </>
        :
        <LoginPage setUser={setUser}/>
      }
    </div>
  );
}

export default App;
