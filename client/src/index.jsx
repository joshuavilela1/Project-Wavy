import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GamesFeed from './components/GamesFeed/GamesFeed.jsx';
import Login from './components/Login/Login.jsx';
import Rankings from './components/Rankings/Rankings.jsx';
import NavBar from './components/NavBar.jsx';
import AddGame from './components/AddGame/AddGame.jsx';
import { Typography } from '@material-ui/core';
// const linksArray = ['Games Leaderboard', 'Ranking Games', 'Post a New Game'];
// const { useState, useEffect } = React;
// const [user, setUser] = useState('');

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Typography variant="h1" align="center">
        Hack R(e)anker
      </Typography>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/addgame" element={<AddGame />} />
        <Route path="/gamesfeed" element={<GamesFeed />} />
        <Route path="/rankings" element={<Rankings />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
